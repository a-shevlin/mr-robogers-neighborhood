# _Mr Robojer's Neighborhood_

#### By _**Alex Shevlin**_

#### _A form for users to find a programming language._

## Technologies Used

* HTML
* CSS/Bootstrap
* Javascript/Jquery

## Description

_This webpage allows users to fill out a form. Upon submission of form users will find a recommended language with clickable links leading to resources about that language._

_The link for this webpage can be found [here](a-shevlin.github.io/mr-robojers-neighborhood)._

# Setup/Installation Requirements

* Clone this repository to your desktop.
* Move to language-suggester folder.
* Open index.html in your browser.

# Known Bugs

* No known bugs

## License

[MIT](/LICENSE)

Copyright (c) _2022_ _Alex Shevlin_

## Tests

Describe: inputArray() 

  Test: It should return an array containing every number between 0 and input.
  Code: inputArray(4);
  Expected Output: [0, 1, 2, 3, 4]

  Test: It should convert a number array to a string array.
  Code: inputArray(4);
  Expected Output: ['0', '1', '2', '3', '4']

Describe: inputRobo()
  
  Test: It should return any number containing 3 as "Won't you be my neighbor?"
  Code: inputRobo(14);
  Expected Output: ['0', '1', '2', "Won't you be my neighbor.?", '4', '5', '6', '7', '8', '9', '10', '11', '12', "Won't you be my neighbor.?", '14']

  Test: It should return any number containing 2 as "Boop!"
  Code: inputRobo(14);
  Expected Output: ['0', '1', 'Boop!', "Won't you be my neighbor.?", '4', '5', '6', '7', '8', '9', '10', '11', 'Boop!', "Won't you be my neighbor.?", '14']

  Test: It should return any number containing 1 as "Beep!"
  Code: inputRobo(14);
  Expected Output: ['0', 'Beep!', 'Boop!', "Won't you be my neighbor.?", '4', '5', '6', '7', '8', '9', '10', 'Beep!', 'Boop!', "Won't you be my neighbor.?", 'Beep!']