export const object_to_array = (object) => {
    const arr = []
    for (const key in object) if (object.hasOwnProperty(key)) arr.push(object[key]);
    return arr
}
export const randomString = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}