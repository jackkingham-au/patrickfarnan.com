// Validate Individual Field
const validateType = {
    specialChars: /^[a-z'"-\s]+$/gi,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
}

export const validate = (value, type, setHelper, setError, setValid) => {
    if(value === '') {
        setHelper('This field is required.');
        setError(true);
    } else if(!value.match(validateType[type])) {
        switch(type) {
            case 'specialChars':
                setHelper('This field cannot contain numbers or special characters.');
            break;
            case 'email':
                setHelper('The email provided is invalid.');
            break;
            case 'phone':
                setHelper('The phone number provided is invalid.')
            break;
        }

        setError(true);
    } else {
        setError(false);
        setHelper('')
        setValid(true);
    }
};

// Validate Form
export const validateSubmit = formData => {
    const errrors = Object.values(formData).filter(val => val === '');
    return errrors;
}