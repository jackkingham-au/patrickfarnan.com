const client = require('@mailchimp/mailchimp_marketing'); 

client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us2'
});

exports.handler = async (event) => {
    const person = JSON.parse(event.body);

    try {
        const addSubscriber = async () => {
            const audience = (!person.audience) ? process.env.MAILCHIMP_AUDIENCE_ID : process.env.MAILCHIMP_AUDIENCE_ID_ + person.audience.toUpperCase();

            const response = await client.lists.addListMember(audience, {
                email_address: person.email,
                status: "subscribed",
                merge_fields: {
                    'FNAME': person.first.toUpperCase(),
                    'LNAME': person.last.toUpperCase()
                }
            });
            
            return response;
        };
          
        const result = await addSubscriber();

        return {
            statusCode: 200,
            body: JSON.stringify({result})
        }
    } catch(error) {
        // Member Already Exists
        if(error.response.text.match(/Member Exists/)) return {
            statusCode: 200,
            body: JSON.stringify({result: 'The user already exists in the list.'})
        }

        return {
            statusCode: 500,
            body: JSON.stringify({error, exists: error.response.text}),
        }
    }   
}