var firebaseConfig = {
    apiKey: "AIzaSyD0RtSwQwqbX6F1iz2eaL-5TfrfPDoBI9w",
    authDomain: "kwitter-5394a.firebaseapp.com",
    databaseURL: "https://kwitter-5394a-default-rtdb.firebaseio.com",
    projectId: "kwitter-5394a",
    storageBucket: "kwitter-5394a.appspot.com",
    messagingSenderId: "722823851926",
    appId: "1:722823851926:web:8a05b40533f2a95a60b7b7"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")

  function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          likes:0
    })
    document.getElementById("msg").value=""
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
