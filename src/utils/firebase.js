import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import * as helper from '../helpers/handleObject'


var firebaseConfig = {
    apiKey: "AIzaSyAw9pehE5_uU3yexHR6fMSHqfKjkwCrT0o",
    authDomain: "react-redux-router-85f3c.firebaseapp.com",
    databaseURL: "https://react-redux-router-85f3c.firebaseio.com",
    projectId: "react-redux-router-85f3c",
    storageBucket: "react-redux-router-85f3c.appspot.com",
    messagingSenderId: "1055664854652",
    appId: "1:1055664854652:web:e75ce2e8522d5cb5645bf9",
    measurementId: "G-PQFH3WGX7B"
};
if (firebase.app.length) {
    try {
        firebase.initializeApp(firebaseConfig)
    } catch (error) {
    }
}
const data = firebase.database().ref('productsList')

export const pushData = (product) => {
    var id = product.id === '' ? helper.randomString() : product.id;
    console.log(id);
    data
        .child(id)
        .set({
            id: id,
            name: product.name,
            price: product.price,
            status: product.status
        })
}
export function fetchData() {
    return data
        .once('value')
        .then((snapshot) => {
            return helper.object_to_array(snapshot.val());
        }).catch((err) => { alert(err) })
}
export function deleteData(id) {
    data.child(id).remove();
}


const dataTest = firebase.database()
export function fetchDatatest() {
    return data
        .once('value')
        .then((snapshot) => {
            console.log(snapshot.val());
            return helper.object_to_array(snapshot.val());
        }).catch((err) => { alert(err) })
}
fetchDatatest()