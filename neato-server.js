var SerialPort = require("serialport");
var keypress = require('keypress');
var express = require('express');
var app = express();
var http = require('http').Server(app); // connects http library to server
var io = require('socket.io')(http);
var serverPort = 8000;

app.use(express.static('public')); // find pages in public directory

// start the server and say what port it is on
http.listen(serverPort, function() {
  console.log('listening on *:%s', serverPort);
});

// Socket server
io.on('connection', function(socket){
  console.log("Connected");
  
  socket.on('info', function(data){
    console.log("info:", data);
    //drive(10,10,100);
  });

  //drive messages
  socket.on('drive', function(data){
    console.log("drive:", data);
    //drive(data.LWheelDist, data.RWheelDist, data.Speed);
  });

  socket.on('move', function(direction){
    console.log(direction);
    //driveKey({'name': direction});
  });

  socket.on('disconnect', function(){});
});


// make `process.stdin` begin emitting "keypress" events
//keypress(process.stdin);

//// listen for the "keypress" event
// process.stdin.on('keypress', function (ch, key) {
//   //console.log('got "keypress"', key);
//   driveKey(key);
//   if (key && key.ctrl && key.name == 'c') {
//     process.stdin.exit();
//   }
// });

// process.stdin.setRawMode(true);
// process.stdin.resume();

//// Setup the connection to the Neato
// var port = new SerialPort("/dev/ttyACM0", {
//   baudRate: 115200
// });

// // Open the port and put the robot into testmode ON so we can drive
// port.on('open', function() {
//   port.write('testmode on' + '\n', function(err) {
//     if (err) {
//       return console.log('Error on write: ', err.message);
//     }
//     console.log('Neato Ready!');
//   });

//   //testPath();
// });

// // open errors will be emitted as an error event
// port.on('error', function(err) {
//   console.log('Error: ', err.message);
// })

// // drive the robot on a sample path
// function testPath() {
//   port.write('SetMotor LWheelDist 500 RWheelDist 500 Speed 50' + '\n');
// }

// // drive the robot from messsages
// function drive(LWheelDist, RWheelDist, Speed) {
//   console.log('SetMotor LWheelDist ' + LWheelDist + 
//              ' RWheelDist ' + RWheelDist + ' Speed ' + Speed + '\n')
//   port.write('SetMotor LWheelDist ' + LWheelDist + 
//              ' RWheelDist ' + RWheelDist + ' Speed ' + Speed + '\n');
// }


// //drive the robot with keypresses
// function driveKey(key) {
//   var dist = 20;
//   switch (key.name) {
//     case 'w': //fwd
//       port.write('SetMotor LWheelDist 20 RWheelDist 20 Speed 100' + '\n');
//       break;
//     case 'a': //left
//       port.write('SetMotor LWheelDist -20 RWheelDist 20 Speed 100' + '\n');
//       break;
//     case 's': //back
//       port.write('SetMotor LWheelDist -20 RWheelDist -20 Speed 100' + '\n');
//       break;
//     case 'd': //right
//       port.write('SetMotor LWheelDist 20 RWheelDist -20 Speed 100' + '\n');
//       break;
//     case 'q': //slight - left
//       port.write('SetMotor LWheelDist 10 RWheelDist 20 Speed 100' + '\n');
//       break;
//     case 'e': //slight - right
//       port.write('SetMotor LWheelDist 20 RWheelDist 10 Speed 100' + '\n');
//       break;
//     //default:

//   }
// }
