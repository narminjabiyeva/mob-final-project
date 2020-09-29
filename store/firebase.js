import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBnw7-OQeAqJBgJ2ljzd_cqhp5r2demDqU",
    authDomain: "ibatech-final-project.firebaseapp.com",
    databaseURL: "https://ibatech-final-project.firebaseio.com",
    projectId: "ibatech-final-project",
    storageBucket: "ibatech-final-project.appspot.com",
    messagingSenderId: "33652401827",
    appId: "1:33652401827:web:8636fe96b729ac0cd60116"
};

firebase.initializeApp(firebaseConfig);

const fbApp = {
  root: firebase,
  auth: firebase.auth()
};

export default fbApp;
