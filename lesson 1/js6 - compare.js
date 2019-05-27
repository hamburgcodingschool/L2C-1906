var a = 19;
var b = 90;
var c = 7;


// if (a > b) {

//   if (a > c) {
//     console.log(a);
//   } else {
//     console.log(c);
//   }

// } else {

//   if (b > c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }

// }

var a = 5;
var b = 20;
var c = 7;


var max;

if (a > b) {
  max = a;
} else {
  max = b;
}

if (c > max) {
  max = c;
}

console.log(max);