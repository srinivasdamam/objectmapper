const objectmapper = require('./index.js');


console.log('Starting tests');


// TEST CASE FOR OBJECT OF STRINGS OR NUMBERS

  const testObject = {a: 1,b: '2',c: 3,d: 4};
  const expectedArray = [1, '2', 3, 4];
  const resultArray = testObject.map((key, value)=>{
    return value;
  });


  // TEST CASE FOR OBJECT OF OBJECTS

  const testObjectOfObjects = {a: {a: 1},b: {b: 2},c: {c: '3'},d: {d: 4}};
  const expectedArrayOfObjects = [{a:1},{b:2},{c:'3'},{d:4}];
  const resultArrayOfObjects = testObjectOfObjects.map((key, value)=>{
    return value;
  });


  // TEST CASE FOR OBJECT OF ARRAYS

  const testObjectOfArrays = {a: [1],b: [2],c: ['3'],d: [4]};
  const expectedArrayOfArrays = [[1], [2], ['3'], [4]];
  const resultArrayOfArrays = testObjectOfArrays.map((key, value)=>{
    return value;
  });


  // TEST CASE FOR OBJECT OF DEEPLY NESTED TYPES

const testObjectsOfNestedThings = {a: {b: [{c: 1}]}, d: [{e: '2'}]};
const expectedArrayOfNestedThings = [{b: [{c: 1}]},[{e: '2'}] ];
const resultArrayOfNestedThings = testObjectsOfNestedThings.map((key, value)=>{
  return value;
});


// TEST CASE FOR OBJECT OF BOOLEANS

const testObjectsOfBooleans = {a: true, b: false};
const expectedArrayOfBooleans = [true,false ];
const resultArrayOfBooleans = testObjectsOfBooleans.map((key, value)=>{
return value;
});


// TEST CASE FOR EMPTY OBJECT

const emptyTestObject = {};
const expectedEmptyArray = [];
const resultEmptyArray = emptyTestObject.map((key, value)=>{
  return value;
});



function compare(arrayOne,arrayTwo){
  return !arrayOne.some(function (value, index) {
    // compare if the value is String or Number
      if (typeof value === String || typeof value === Number){
            return value != arrayTwo[index];
    // compare if the value is an Object
      } else if (typeof value === Object){
            // TODO: CHECK IF THE OBJECT HAS OBJECT OR ARRAY CHILDREN, IF SO, object.map both into arrays, and call compare recursively
            // ELSE RETURN
            return !compare(Object.entries(value), Object.entries(arrayTwo[index]))
    // compare if the value is an Array
      } else if (typeof value === Array){
            // TODO: CHECK IF THE ARRAY HAS OBJECT OR ARRAY CHILDREN, IF SO, compare
            // ELSE RETURN
            return !value.some(function (e, i) {
              return e != arrayTwo[index][i];
          });
      } else if (typeof value === Boolean){
            return value !== arrayTwo[index];
      }
  });
}




if (!compare(resultArray, expectedArray)){
  throw new Error('Array of literals not deep equal');
} else {
  console.log('Array of literals: OK');
}

if(!compare(resultArrayOfArrays, expectedArrayOfArrays)){
  throw newError('Arrays of arrays not deep equal');
} else {
  console.log('Arrays of arrays: OK');
}

if (!compare(resultArrayOfObjects, expectedArrayOfObjects)){
  throw new Error('Array of objects not deep equal');
} else {
  console.log('Array of Objects: OK');
}

if(!compare(resultArrayOfNestedThings, expectedArrayOfNestedThings)){
  throw new Error('Array of nested things not deep equal');
} else {
  console.log('Array of nested things: OK');
}


if(!compare(resultArrayOfBooleans, expectedArrayOfBooleans)){
  throw new Error('Array of booleans not deep equal');
} else {
  console.log('Array of booleans: OK');
}

if(!compare(resultEmptyArray, expectedEmptyArray)){
  throw new Error('Empty arrays not deep equal');
} else {
  console.log('Empty array: OK');
}

console.log('All tests pass.');
