import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( //Initialize the app at the beginning
    {
            // Your web app's Firebase configuration
            apiKey: "AIzaSyAzIPwiXAFgBweRqQ5hg16dLoKlybKtzjA",
            authDomain: "react-contact-form-ba022.firebaseapp.com",
            projectId: "react-contact-form-ba022",
            storageBucket: "react-contact-form-ba022.appspot.com",
            messagingSenderId: "179632690992",
            appId: "1:179632690992:web:06c63bd7608851eab7daf5"

    }
);
const db = firebaseApp.firestore();
//This is the way that react knows that the above are the credentials and store the data in firebase database
//db is the database that we are using. Since firebaseApP gets all the data. So we are telling it
// to store on firestore --> firebaseApp.firestore();
export {db};
