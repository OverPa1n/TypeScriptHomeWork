export function updateObjectInArray(obj, key, newKeyValue) {
    let newArr = JSON.parse(JSON.stringify(obj));
    newArr.map((element) => {
        if (element.hasOwnProperty(key)) {
            element[key] = newKeyValue;
        }
        else {
            console.log('wrong key');
        }
    });
    return newArr;
}
