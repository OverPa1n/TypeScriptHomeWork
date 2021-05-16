var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { updateObjectInArray } from "./UpdateObjectInArray.js";
//Send request to API
const sendRequest = () => {
    return new Promise(((resolve) => __awaiter(void 0, void 0, void 0, function* () {
        let dataFromRequest;
        let response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        (response.ok ? dataFromRequest = yield response.json() : Promise.reject(response));
        //Iterate over posts
        let posts = dataFromRequest.map((items) => {
            return {
                id: items.id,
                title: items.title,
                body: items.body,
            };
        });
        resolve(posts);
    })));
};
sendRequest().then(data => renderPost(updateObjectInArray(data, 'title', 'new title')));
//Function that render posts
const renderPost = (arrayOfPosts) => {
    let div = document.querySelector('.posts');
    div.innerHTML = arrayOfPosts.map((items) => {
        return `<p>${items.id}<br/> <span>${items.title}</span> <br/>${items.body}</p>`;
    }).join(' ');
};
