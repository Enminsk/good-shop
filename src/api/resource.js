export const resource = async (url) => {
    const res = await fetch(`${ url }`);

    if (res.ok) {
        return await res.json();
    }
    throw new Error(`Could not fetch ${url} + , received ${res.status}`);
    
};

/* export const request = (url, { params = {} } ) => {
        const urlParams = new URLSearchParams(params).toString();
        return fetch(`${url}?${urlParams}`).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('some error');
        });
    }; */
