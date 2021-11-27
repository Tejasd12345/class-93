
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCCFitkdFqbSr86tZqkXz-2tv6ySIuxiKw",
      authDomain: "kwitter-88c90.firebaseapp.com",
      databaseURL: "https://kwitter-88c90-default-rtdb.firebaseio.com",
      projectId: "kwitter-88c90",
      storageBucket: "kwitter-88c90.appspot.com",
      messagingSenderId: "468343755009",
      appId: "1:468343755009:web:3b3f2e620302b1f6184b00"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
