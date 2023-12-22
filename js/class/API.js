export default class API {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async fetch(route) {
        return await fetch(this.baseUrl + route)
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err));
    }

    async store(route, dataKey = false) {
        if (!dataKey) {
            dataKey = route;
        }

        const data = await this.fetch(route);
        this[dataKey] = data;
    }
}