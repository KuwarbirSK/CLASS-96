
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
      roomnames = localStorage.getItem("roomname");
      usernames = localStorage.getItem("user");
      console.log("roomname", roomnames);
      console.log("user", usernames);

function getData() {firebase.database().ref("/"+roomnames).on('value', function(snapshot) { document.getElementById("output_msg").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log("firebase_message_id", firebase_message_id);
console.log("message_data",message_data);

like = message_data["likes"];
message = message_data["message"];
name = message_data["name"];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
msg_with_tag = "<h4> "+ message +"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + msg_with_tag + like_button +span_with_tag;

document.getElementById("output_msg").innerHTML = row + document.getElementById("output_msg").innerHTML;



      } });  }); }
getData();
function logout_page3(){
      localStorage.removeItem("user");
      localStorage.removeItem("roomname");
      window.location="index.html";
}

function send_msg(){
      message = document.getElementById("msg_input").value;
      firebase.database().ref(roomnames).push({
            name:   usernames,
            message : message,
            Likes : 0
      });
}