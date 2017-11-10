objectmapper is a simple helper that lets you map an object's keys and values to a new array, mostly used in rendering lists of data inside React's JSX epressions.

### Installation

`npm install --save objectmapper`

### Usage:

Object.map((key, value)=> { // do what you want, return something });


### Example:

```
const objectmapper = require('objectmapper');
// import objectmapper from 'objectmapper'; //BABEL

const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

const newArray = myObject.map((key, value) => `key is: ${key} value is: ${value}`);

console.log(newArray);

/*
[
'key is: a value is: 1',
'key is: b value is: 2',
'key is: c value is: 3'
]
*/

```
