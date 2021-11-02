// Задача:
// Трансформировать массив пользователей в массив следующего вида.
// Чтобы имя пользователя было ключом объекта, а email пользователя - значением объекта.

// Например:
/*
{ John: 'john@mail.com' },
{ Peter: 'peter@mail.com' },
{ Hans: 'hans@mail.com' },
{ David: 'john@mail.com' },
{ Peter: 'peter@mail.com' },
{ Alex: 'john@mail.com' },
{ Peter: 'peterson@mail.com' }
*/

// Полезная информация:
// - https://learn.javascript.ru/object
// - https://learn.javascript.ru/logical-operators
// - https://learn.javascript.ru/array-methods#map
// - https://learn.javascript.ru/keys-values-entries

const testData = [
  { name: "John", email: "john@mail.com", age: "18" },
  { name: "Peter", email: "peter@mail.com", age: "24" },
  { name: "Hans", email: "hans@mail.com", age: "19" },
  { name: "David", email: "john@mail.com", age: "63" },
  { name: "Peter", email: "peter@mail.com", age: "32" },
  { name: "Alex", email: "john@mail.com", age: "42" },
  { name: "Peter", email: "peterson@mail.com", age: "22" },
];

function getDirectory(users) {
  // Add answer here
  const newUser = users.map(item => {
    // Object.value(item.name) = Object.keys(item.name) && (Object.values(item.name) = Object.values(item.email));
    (item.name.value = item.name.key) && (item.name.value = item.email.value);
    return item;
  });
  // console.log(item);
  console.log(newUser);
  return newUser;
}

// Do not touch code below
checkResult(getDirectory(testData))

function checkResult(users) {
  const lastUser = users[users.length - 1];
  console.log(lastUser);
  if (
    Object.keys(lastUser)[0] === "Peter" &&
    Object.values(lastUser)[0] === "peterson@mail.com"
  ) {
    console.warn('Correct!');
  } else {
    console.error('Wrong!');
  }
}
