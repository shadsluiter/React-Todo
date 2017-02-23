import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCPYNNFlrHOiC1hS6dGxy2iDTt9AUqrer8",
      authDomain: "sluiter-todo-app.firebaseapp.com",
      databaseURL: "https://sluiter-todo-app.firebaseio.com",
      storageBucket: "sluiter-todo-app.appspot.com",
      messagingSenderId: "39967684811"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
