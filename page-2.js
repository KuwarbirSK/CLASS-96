
var firebaseConfig = {
  apiKey: "AIzaSyCoOVfu0qoJxjfN0GLT2_HKtcyph-tKv2M",
  authDomain: "chat-room2-cbd0a.firebaseapp.com",
  databaseURL: "https://chat-room2-cbd0a-default-rtdb.firebaseio.com",
  projectId: "chat-room2-cbd0a",
  storageBucket: "chat-room2-cbd0a.appspot.com",
  messagingSenderId: "501636867262",
  appId: "1:501636867262:web:f2872cfca0144e23582aef"
};

    

  firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user");

  document.getElementById("username").innerHTML = "welcome" + user_name;

function add_room(){
  roomName = document.getElementById("room_name").value;
  console.log(roomName);
  localStorage.setItem( "roomname", room_name);
  firebase.database().ref("/").child(roomName).update({"purpose" : "addingRoom" });


}  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log(Room_names);
      row='<div class="room-name1" id='+Room_names+' onclick="redirect(this.id)" >#'+Room_names+'</div><hr>';
      document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + row;
  
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
  window.location= "index.html";
}