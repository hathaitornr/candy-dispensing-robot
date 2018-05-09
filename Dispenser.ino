#include <Servo.h>
// constants won't change
const int buttonPin1 = 3;
const int buttonPin2 = 4;
const int buttonPin3 = 2;

// variables will change:
int buttonState1 = 0; 
int buttonState2 = 0; 
int buttonState3 = 0; 
Servo servo1;
Servo servo2;
Servo servo3;

int pos1 = 0;
int pos2 = 0;
int pos3 = 0;
void setup() {
  // put your setup code here, to run once:

  // open the serial port at 9600 bps:
  Serial.begin(9600); 
  servo1.attach(10);
  servo2.attach(8);
  servo3.attach(9);
  
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(buttonPin3, INPUT);     
}

void loop() {
  delay(200);  
  
  // put your main code here, to run repeatedly:
  // read the state of the pushbutton value:
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
    
  if (buttonState1 == HIGH && buttonState2 == LOW && buttonState3 == LOW) {
    Serial.print("botton 1 \n");
    turn(pos1, servo1);
  } else if (buttonState2 == HIGH && buttonState1 == LOW && buttonState3 == LOW) {
    Serial.print("botton 2 \n");
    turn(pos2, servo2);
  } else if (buttonState3 == HIGH && buttonState1 == LOW && buttonState2 == LOW) {
    Serial.print("botton 3 \n");
    turn(pos3, servo3);
  } else {
    //Serial.print("botton not pushed \n");
  }
}

void turn(int pos, Servo myservo){
  for (pos = 1; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
      // in steps of 1 degree
      myservo.write(pos);              // tell servo to go to position in variable 'pos'
      delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
      myservo.write(pos);              // tell servo to go to position in variable 'pos'
      delay(15);                       // waits 15ms for the servo to reach the position
  }
}


