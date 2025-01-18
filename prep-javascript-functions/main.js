function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const getGreeting = (name) => 'Greetings, ' + name;

const addAndMultiplyBy5 = (num1, num2) => (num1 + num2) * 5;

const multiplyAndDivideBy5 = (num1, num2) => (num1 * num2) / 5;

function subtractTwoNumbers(num1, num2) {
  //returns the difference between 2 arguments.
  return Math.abs(num1 - num2);
}

const getCircleCircumference = (radius) => 2 * Math.PI * radius;

//for functions like these delineated argument format assumptions is good professional
//practice. Readability directly corresponds to tech debt.
const getFullName = (firstName, lastName) => firstName + ' ' + lastName;

const cube = (number) => number * number * number;
