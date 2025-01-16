const person = {
  firstName: 'Joe',
  lastName: 'Park',
  hobby: 'games',
};

console.log(person);
person.lastName = 'Pak';
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'unemployed';
console.log("The person's job is : " + person.job);
person['previousJob'] = 'student';
console.log("The person's previous job was: " + person['previousJob']);

console.log(person);
