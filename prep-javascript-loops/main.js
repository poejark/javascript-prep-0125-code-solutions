// create your loops here.
const whileLoop1 = () => {
  const arrayName = [];
  let i = 0;
  while (i < 10) {
    arrayName.push(i);
    i++;
  }
  return arrayName;
};

const arrayNameResult = whileLoop1();
console.log(arrayNameResult);
// console.log(arrayName);

const whileLoop2 = () => {
  const arrayName1 = [];
  let i = 0;
  while (i < 10) {
    arrayName1.push(i * 2);
    i++;
  }
  return arrayName1;
};

const arrayName1Result = whileLoop2();
console.log(arrayName1Result);

const forLoop1 = () => {
  const arrayName = [];
  for (let i = 0; i < 10; i++) {
    arrayName.push(i);
  }
  return arrayName;
};

const forLoopResult = forLoop1();
console.log(forLoopResult);

const forLoop2 = () => {
  // const arrayName = [];
  for (let i = 100; i > 0; i--) {
    console.log('Time to explosion: ' + i);
  }
};

forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

const forInLoop1 = (object) => {
  const arrayName = [];
  for (const i in object) {
    arrayName.push(i);
  }
  return arrayName;
};

const forInLoopResult = forInLoop1(person);
console.log(forInLoopResult);

const forInLoop2 = (object) => {
  const arrayName = [];
  for (const i in object) {
    //iterable i of object properties are strings.
    console.log(i);
    arrayName.push(object[i]);
  }
  return arrayName;
};

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
