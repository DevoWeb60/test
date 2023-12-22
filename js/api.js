export const API_URL = 'https://jsonplaceholder.typicode.com/';

export async function customFetch(route, method = "GET", body = {}) {
    const result = await fetch(API_URL + route, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(res => res);

    return result;
}

export async function getData(route) {
    return await customFetch(route);
}

export async function postData(route, body) {
    return await customFetch(route, "POST", body);
}

export async function putData(route, body) {
    return await customFetch(route, "PUT", body);
}




