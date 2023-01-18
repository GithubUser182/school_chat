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
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"

  function addRoom(){
    room_name=document.getElementById("room_name").value

    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding room"
    })
    localStorage.setItem("room_name",room_name)

    window.location="kwitter_room_page.html"
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log(Room_names)
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML +=row
    //End code
    });});}
getData();

function redirectToRoomName(name){
console.log(name)

localStorage.setItem("room_name",name)

window.location="chat_room_page.html"
}

function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html"
}