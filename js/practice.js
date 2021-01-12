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

// todo: переписать фун-цию с использованием тернарника и стрел.ф-цииЖ
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask(
//   'Вы согласны?',
//   () => {
//     alert('Вы согласились.');
//   },
//   () => {
//     alert('Вы отменили выполнение.');
//   },
// );

// ! ------------------
// const counter = function () {
//   let n = 0;
//   const increment = q => {
//     n += q;
//   };
//   const show = function () {
//     console.log(n);
//   };
//   return { increment, show };
// };
// let A = counter();
// A.increment(10);
// A.increment(100);
// A.show();

// ! ------------------
/*  
Напиши функцию-конструкор User для создания 
пользователя со следующим свойствами:
- name - строка (имя)
- age - число (возраст)
- friends - число (кол-во друзей)
Имя, возраст и друзей, 
будут переданы при вызове конструктора User.
Добавь метод getInfo(), который, выводит строку:
`User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

/*
const User = function (name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;

  this.getInfo = function () {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.friends} friends`,
    );
  };
};

const user1 = new User('John', 25, 5);
console.log(user1);
user1.getInfo(); */

// ! ------------------
/*
const dog = {
  barks: true,
  eat: true,
  paws: 4,
};
const bethoven = Object.create(dog);
bethoven.paws = 3;
console.log(bethoven.paws);

const puppy = Object.create(bethoven);
const puppy2 = Object.create(dog);
console.log('PUPPY  ', puppy.paws);
console.log('PUPPY2  ', puppy2.paws);

Object.prototype.day = 31;
console.log(Object.prototype);
let obj = {};
console.log(obj.day); */

// ! ------------------
//? Elections
// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

/*const electionsResult = {};

const candidate = {
  trump: 'Trump',
  baiden: 'Baiden',
};

const Voter = function (name, choice) {
  this.name = name;
  this.choice = choice;

  this.vote = function () {
    if (electionsResult[this.name]) {
      return;
    } else {
      electionsResult[this.name] = this.choice;
    }
  };
};

const a = new Voter('Vova', candidate.baiden);
a.vote();
console.log(a);
console.log(electionsResult); */

// ! ver.2
/*
const electionsResult = {};

const votedResult = {};

const candidate = {
  trump: 'Trump',
  baiden: 'Baiden',
};

const Voter = function (name) {
  this.name = name;
  // this.choice = choice;

  this.vote = function (choice) {
    if (electionsResult[this.name]) {
      return;
    } else {
      electionsResult[this.name] = choice;
    }
  };
};

const a = new Voter('Vova');
const b = new Voter('Petya');
const c = new Voter('Vasia');
const d = new Voter('Roma');
const f = new Voter('adfas');
const g = new Voter('advfds');
const h = new Voter('lkjoij');
const k = new Voter('reerw');
a.vote(candidate.baiden);
b.vote(candidate.baiden);
c.vote(candidate.baiden);
d.vote(candidate.trump);
f.vote(candidate.baiden);
g.vote(candidate.trump);
h.vote(candidate.baiden);
k.vote(candidate.trump);
console.log(a);
console.log(electionsResult);

const countResults = function (electionsResult, votedResult) {
  for (let key in electionsResult) {
    // console.log(electionsResult[key]);
    votedResult[electionsResult[key]] = 0;
  }
  for (let vote in electionsResult) {
    votedResult[electionsResult[vote]] += 1;
    // console.log(true);
  }

  console.log(votedResult);
};

countResults(electionsResult, votedResult); */

// ! --------------------

// Human, elf, dwarf,
// power, life, exp,

const Human = function (power, life, exp, dmg) {
  this.power = power;
  this.life = life;
  this.exp = exp;
  this.dmg = dmg;

  this.attack = function (obj) {
    obj.life -= this.dmg;
    console.log(obj);
    console.log(`Объект ${obj.name} получил урон ${this.dmg}`); // ! check names
  };
};

const Elf = function (power, life, exp) {
  this.power = power;
  this.life = life;
  this.exp = exp;
};

const Dworf = function (power, life, exp) {
  this.power = power;
  this.life = life;
  this.exp = exp;
};

const human1 = new Human(100, 100, 100, 10);
const elf1 = new Elf(200, 200, 0);
const dworf1 = new Dworf(150, 300, 300);

const aragorn = Object.create(human1);
aragorn.name = 'Aragorn';
aragorn.weapon = 'sword';

const legolas = Object.create(elf1);
legolas.name = 'Legolas';
legolas.weapon = 'bow';

const givi = Object.create(dworf1);
givi.name = 'Givi';
givi.weapon = 'axe';

console.log(aragorn);
console.log(legolas);
console.log(givi);

aragorn.attack(givi);
