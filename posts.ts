import {updateObjectInArray} from "./UpdateObjectInArray.js";

type objectNew =  {
    obj: [{}],
    key: string,
    newValue: string
}

export type Posts = {
    id: number,
    title: string,
    body: string
}
//Send request to API
const sendRequest = (): Promise<Posts> => {
    return new Promise<Posts>( (async resolve => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();

        let posts = data.map((items: Posts) => {
            return {
                id: items.id,
                title: items.title,
                body: items.body,
            }
        })
        resolve(posts)

    }))
}
sendRequest().then(data => renderPost(updateObjectInArray<objectNew>(data,'title', 'new title')));

//Function that render posts
const renderPost = (arrayOfPosts: any) => {
    let div: any = document.querySelector('.posts');

    div.innerHTML = arrayOfPosts.map((items: Posts) => {
         return `<p>${items.id} ${items.title} ${items.body}</p>`
    }).join(' ');

}

