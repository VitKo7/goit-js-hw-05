// ! -------------------- START OF 2021-01-11 --------------------
//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
/* 
const toCamelCase = function (str) {
  let splittedStr = str.split('-');
  let res = splittedStr[0];

  for (let i = 1; i < splittedStr.length; i++) {
    let temp = splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
    res += temp;
  }

  return res;
};

console.log(toCamelCase('my-short-string')); */
// camelize('background-color') == 'backgroundColor';
// camelize('list-style-image') == 'listStyleImage';
// camelize('-webkit-transition') == 'WebkitTransition';

// ! var.1
// 4)Удалить значения из массива (те, которые между "от" и "до")
/* let arr = [1, 'от', 2, 3, 4, 5, 6, 7, 8, 9, 'до', 10];

let deleteUser = function (arr, from, to) {
  let first = arr.indexOf(from);
  let second = arr.indexOf(to);
  const newArr = arr.splice(first, second + 1 - first);
  return newArr;
};

deleteUser(arr, 'от', 'до'); */

/*
return array.splice(
    array.indexOf(from) + 1,
    array.indexOf(to) - 1 - array.indexOf(from) */

// ! var.2
/* // 4)Удалить значения из массива (те, которые между "от" и "до")

let arr = [1, 'от', 2, 3, 4, 5, 6, 7, 8, 9, 'до', 10];

const delate = function (arr, from, to) {
  let first = arr.indexOf(from);
  let second = arr.indexOf(to);
  arr.splice(first, second + 1 - first);
  return arr;
};

console.log(delate(arr, 'от', 'до'));
*/

// +++ ДЕСТРУКТУРИЗАЦИЯ 5)У нас есть объект:
/* 
let user = {
  name: 'John',
  years: 30,
  isAdmin: true,
};
/* Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства) */
/* 
const { name, years, isAdmin = false } = user;
console.log(name, years, isAdmin); */

// ! +++
// 8) Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи
/* let a = [1, 2, 3, 5, 6, 9];
let b = [];

const isEven = function (n) {
  return n % 2 === 0;
};

const evenNum = function (arr) {
  for (let num of arr) {
    isEven(num) ? b.push(num) : '';
  }
  return b;
};
console.log(evenNum(a)); */

// 9) // Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера.
// Опрацювати всі варіанти:

// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.
/*
let userChoice = prompt('Ваш выбор');
const choice = ['Камень', 'Ножницы', 'Бумага'];
let compChoice;
const theGame = function (userInput) {
  compChoice = choice[Math.floor(Math.random() * choice.length)];

  if (userInput === compChoice) {
    alert('Ничья');
  } else if (userInput === 'Камень' && compChoice === 'Ножницы') {
    alert('Победа');
  } else if (userInput === 'Камень' && compChoice === 'Бумага') {
    alert('Победа');
  } else if (userInput === 'Ножницы' && compChoice === 'Камень') {
    alert('Поражение');
  } else if (userInput === 'Ножницы' && compChoice === 'Бумага') {
    alert('Победа');
  } else if (userInput === 'Бумага' && compChoice === 'Камень') {
    alert('Победа');
  } else if (userInput === 'Бумага' && compChoice === 'Ножницы') {
    alert('Поражение');
  }
};
theGame(userChoice);
console.log(compChoice); */

// ---------------------------------------------------------

// ! РЕКУРСИЯ = вызов самой себя по достижению определенного условия
// const pow = function(n,q) {
// if(q === 1) {
//     console.log('if',"n: ", n, "q: ", q)
//     return n
// }
// else {
//     console.log('else', "n: ", n, "q: ", q)
//     return n * pow(n, q-=1)
// }

// }
// console.log(pow(3,3))

// __________________
// const recursion = function(n) {
// console.log(n)
// if(n>=10) {
//     return n
// } else {
//     recursion(n+=1)
// }

// }

// recursion(0);

/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/
/*
const list = {
  apples: 50,
  pears: 75,
  bananas: 25,
};

const userMoney = 100;

const cashier = function (list, money = 0) {
  let sum = 0;
  for (let product in list) {
    sum += list[product];
  }

  let res =
    sum > userMoney
      ? 'Вам не хватает денег для покупки'
      : 'Спасибо за апокупку.';
  console.log(res);
};

cashier(list, userMoney); */
// ! -------------------- END OF 2021-01-11 --------------------

// ! -------------------- START OF 2021-01-12 --------------------
