 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyD2pcYAGphlVZ6AxLyL_m4qh6lH9VYeWis",
      authDomain: "kwitter-8dd4c.firebaseapp.com",
      databaseURL: "https://kwitter-8dd4c-default-rtdb.firebaseio.com",
      projectId: "kwitter-8dd4c",
      storageBucket: "kwitter-8dd4c.appspot.com",
      messagingSenderId: "488030114950",
      appId: "1:488030114950:web:28e82056c1d6f740726d07"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_width_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_width_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_idn + "value=" + like + "onclick='updatelike(this.id)'>";
span_width_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like + "</span></button><hr>";
row = name_width_tag + message_width_tag + like_button + span_width_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updatelike(message_id)
{
console.log("click on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes)+1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
like : update_likes
});
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}