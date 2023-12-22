export function slugify(string) {
    return string.replace(/ /g, '-').toLowerCase();
}

export async function jsonPlaceholder() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => res);

    return result;
}