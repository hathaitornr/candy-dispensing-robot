// WebSocket connection setup
var socket = io();

// send out LedOn message over socket
function move(direction){
  socket.emit('move', direction);
}

//-- Addition: This function receives the new image name and applies it to html element.

// socket.on('newPicture', function(msg) {
//   document.getElementById('pictureContainer').src=msg;
// });

// socket.on('twoPictures', function(imgs){
//   document.getElementById('pictureContainer').src = imgs[0];
//   document.getElementById('alteredImg').src = imgs[1];
// });
// read the data from the message that the server sent and change the
// background of the webpage based on the data in the message
// socket.on('server-msg', function(msg) {
//   msg = msg.toString();
//   console.log('msg:', msg);
//   switch (msg) {
//     case "light":
//       document.body.style.backgroundColor = "white";
//       console.log("white")
//       break;
//     case "dark":
//       document.body.style.backgroundColor = "black";
//       console.log("black");
//       break;
//     default:
//       //console.log("something else");
//       break;
//   }
// });