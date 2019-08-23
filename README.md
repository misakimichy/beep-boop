# _Roman Numerals_

#### _Given a task to build a Beep Boop application, 8/23/2019_

## Description
Build a Beep Boop application (using HTML, CSS, JavaScript and jQuery)

Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

* The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

A user should be able to enter a new number and see new results over and over again.

### Website should have:

**Specs**

Here is the individual behaviors with input/output examples.

- **Spec**: The program returns a range of numbers from 0 to the users inputted number
    - **Input**: '4'
    - **Output**: '0, 1, 2, 3, 4'

- **Spec**: The program returns a range of numbers from 0 and returns "Beep!" when it contains a 1
    - **Input**: '4'
    - **Output**: '0, "Beep!", 2, 3, 4'

- **Spec**: The program returns a range of numbers from 0 and returns "Boop!" when it contains a 2
    - **Input**: '4'
    - **Output**: '0, 1, "Boop", 3, 4'

- **Spec**: The program returns a range of numbers from 0 and returns a message when it contains a 3
    - **Input**: '4'
    - **Output**: '0, 1, 2,  "I'm sorry. I'm afraid I can't do that.", 4'

- **Spec**: The program returns an error message when user input except numbers
    - **Input**: 'Hello'
    - **Output**: 'Please enter numbers!'


## Setup/Installation Requirements
* Clone this repo:
`$git clone https://github.com/misakimichy/beep-boop.git`

* Navigate to the top level of the cloned directory.
* Then, open your preferred web browser.

## Known Bugs
* Work in progress.

## Support and contact details
 misaki.koonce@gmail.com

## Technologies Used
_Git GitHub  HTML CSS Bootstrap jQuery JavaScript and VSCode 


## License
Copyright (c) 2019 under the MIT License