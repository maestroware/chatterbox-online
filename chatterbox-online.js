//ADD YOUR FIREBASE LINKS
 var firebaseConfig = { 
   apiKey: "AIzaSyAWU3FIUDKuK2Usex-w650UUYpFwe371Wk", 
   authDomain: "lolipop-9cfe1.firebaseapp.com", 
   databaseURL: "https://lolipop-9cfe1-default-rtdb.firebaseio.com",
    projectId: "lolipop-9cfe1", storageBucket: "lolipop-9cfe1.appspot.com",
     messagingSenderId: "431656993510", 
     appId: "1:431656993510:web:114087e4cc0fb3fe40b127" };
      // Initialize Firebase 
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("unop").innerHTML = "Welcome " + user_name + "!";

function ar()
{
  room_name = document.getElementById("room-name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chatterbox.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        // message_data = childData;
        console.log("Room Name - " + Room_names);
        
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chatterbox.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}