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

  function logout(){
    window.location="index.html"
  }