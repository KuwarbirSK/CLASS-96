//firebase acc- kuwarbir2008@gmail.com
//ADD YOUR FIREBASE LINKS HERE    
var firebaseConfig = {
  apiKey: "AIzaSyDEw2beq04860IQsS_zGbsnzJ1i4rxIAn0",
  authDomain: "chat-room2-e8641.firebaseapp.com",
  projectId: "chat-room2-e8641",
  storageBucket: "chat-room2-e8641.appspot.com",
  messagingSenderId: "90793371863",
  appId: "1:90793371863:web:6eabcc76242431f6602892"
};
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //we replaced cont with var in line, cont app= replaced with firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user");

  document.getElementById("username").innerHTML = "welcome " + user_name;

function add_room(){
  roomName = document.getElementById("room_name").value;
  console.log(roomName);
  localStorage.setItem( "roomname", room_name);
  firebase.database().ref("/").child(roomName).update({"purpose" : "addingRoom" });
  window.location= "page-3.html"
  //window.location = "page-3.html";

}  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row='<div class="room-name1" id='+Room_names+' onclick="redirect(this.id)" >#'+Room_names+'</div><hr>';
      document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + row;
      //End code
      });});}
getData();

function redirect(name){
  localStorage.setItem("roomname",name);
  console.log(name);
  window.location= "page-3.html";
}

function logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("roomname");
  window.location= "page-1.html";
}