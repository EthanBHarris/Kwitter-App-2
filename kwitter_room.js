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
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " +user_name + "!";
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";

}