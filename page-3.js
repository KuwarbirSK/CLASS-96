

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


      } });  }); }
getData();
function logout_page3(){
      localStorage.removeItem("user");
      localStorage.removeItem("roomname");
      window.location="page-1.html";
}

roomnames = localStorage.getItem("roomname");
usernames = localStorage.getItem("user");


function send_msg(){
      message = document.getElementById("msg_input").value;
      firebase.database().ref(room_names).push({
            name:   usernames,
            message : message,
            Likes : 0
      });
}