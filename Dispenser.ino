/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position
const int buttonPin1 = 1;
const int buttonPin2 = 3;
const int buttonPin3 = 5;
int buttonState1 = 0;
int buttonState2 = 0;
int buttonState3 = 0;

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(buttonPin3, INPUT);
  Serial.begin(9600);
}

void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  if (buttonState1 == HIGH){
    Serial.println("Button 1");
//    for (pos = 0; pos <= 90; pos += 1) { 
//      // in steps of 1 degree
//      myservo.write(pos);              
//      delay(15);                       
//    } 
  }

  if (buttonState2 == HIGH){
    Serial.println("Button 2");
//    for (pos = 0; pos <= 90; pos += 1) { 
//      // in steps of 1 degree
//      myservo.write(pos);              
//      delay(15);                       
//    } 
  }

  if (buttonState3 == HIGH){
    Serial.println("Button 3");
//    for (pos = 0; pos <= 90; pos += 1) { 
//      // in steps of 1 degree
//      myservo.write(pos);              
//      delay(15);                       
//    } 
  }
}

