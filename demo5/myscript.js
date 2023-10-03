// Declare variables
vall = 3;
val2 = 8;
myName = 'Semmy Wellem Taju';

// Document object
document.getElementById('my-btn').addEventListener('click', function () {
  myFunction(myName, vall, val2);
});

// Your Function, hy remember your function
function myFunction(name, a, b) {
  var value = a * b;
  var join = name + ': ' + value;

  document.getElementById('value-demo').innerHTML = join;
}
