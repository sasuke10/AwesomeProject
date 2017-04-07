import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBZEy1UZfk1htnTIJyECpx8pXFYziam9y8',
    authDomain: 'awesomeproject-be890.firebaseapp.com',
    databaseURL: 'https://awesomeproject-be890.firebaseio.com',
    projectId: 'awesomeproject-be890',
    storageBucket: 'awesomeproject-be890.appspot.com',
    messagingSenderId: '622919795266',
};
firebase.initializeApp(config);

export const facebookAddProvider = firebase.auth.FacebookAuthProvider;
export const firebaseAuth = firebase.auth();

export default firebase;
