import sanityClient from '@sanity/client';
import urlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'piiiiszk',
    dataset: 'production',
});

// Image URL Builder
export const urlFor = src => {
    return urlBuilder(client).image(src);
}

// Capitalize First Letters in JS
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert URL to Page Title Format in Sanity
export const urlToTitle = url => {
    const words = url.replace('-', ' ').toLowerCase().split(' ');
    const title = words.map(word => capitalize(word));
    return title.join(' ');
}

// Fetch Page From Reference
export const getPageReference = async (id, setPageRef) => {
    const result = await client.fetch(`*[_type=='pages' && _id=='${id}']`);
    setPageRef(result[0]);
}

// Fetch Services Listed in Cart
export const getServices = async (cart) => {
    const result = await client.fetch(`*[_type == 'services' && _id in $cart]`, {cart});
    return result;
}