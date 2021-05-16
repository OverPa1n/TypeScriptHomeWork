import {Posts} from "./posts.js";

export function updateObjectInArray<T>(obj: Posts, key: string, newKeyValue: string): T {
let newArr = JSON.parse(JSON.stringify(obj));

    newArr.map((element: any) => {
        if(element.hasOwnProperty(key)) {
            element[key] = newKeyValue;
        }else {
            console.log('wrong key');
        }
    })

    return newArr
}





