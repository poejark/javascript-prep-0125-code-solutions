const arrayName = [];
arrayName.push(1);
arrayName.push('value', 4);
const user = {
  id: 123400,
  username: 'floppyFrango',
  activity: [0, 1, 2, 3, 4],
};
arrayName.push(user);
console.log(arrayName);

const languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log('the language array log output: ', languages);

const firstElement = languages[0];
console.log('first element: ', firstElement);

const thirdElement = languages[2];
console.log('third element: ', thirdElement);

const length = languages.length;
console.log('The length is ', length);

const lastElement = languages.at(-1);
console.log('last element: ', lastElement);
