import API from "./js/class/API.js";
import './js/dom.js';

const card = $('.card');

const Api = new API("https://jsonplaceholder.typicode.com/");

await Api.store("todos");
await Api.store("posts");

console.log(Api);

Api.posts.forEach(post => {
    console.log(post.title)
})