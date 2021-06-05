//Задание 1

//Запиши условие в инструкции if так, чтобы функция работала правильно.

//function checkAge(age) {
//  if (age >= 18) { // Change this line
//    return "You are an adult";
//  }

//  return "You are a minor";
//}


//Задание 2

//Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

//Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

//    удали переменную message
//    удали else
//    код должен работать так же, как и до оптимизации

//function checkPassword(password) {
//  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line
  
//  if (password === ADMIN_PASSWORD) {
//    return("Welcome!");
//      } 
//    return("Access denied, wrong password!");
  
  // Change code above this line
//}


//Задание 3

//Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

//    available - доступное количество товаров на складе
//    ordered - количество единиц товара в заказе

//Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

//function checkStorage(available, ordered) {
 
//  if (ordered === 0) {
//    return"Your order is empty!";}
//  if (ordered > available) {
//    return"Your order is too large, not enough goods in stock!";}
  
//    return"The order is accepted, our manager will contact you";
//  }


//Задание 4

//Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// Change code below this line
//const fruits = ["apple", "plum", "pear", "orange"]


//Задание 5

//Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
//Имя переменной 	Значение переменной
//firstElement 	первый элемент массива
//secondElement 	второй элемент массива
//lastElement 	последний элемент массива

//const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
//const firstElement = fruits[0];
//const secondElement = fruits[1]; 
//const lastElement = fruits[3];



//Задание 6

//Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

//const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
//fruits[1] = "peach";
//fruits[3] = "banana";


//Задание 7

//Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

//const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
//const fruitsArrayLength = fruits.length;


//Задание 8

//Объяви две переменные:
//Имя переменной 	Ожидаемое значение
//lastElementIndex 	Мндекс последнего элемента масcива fruits через длина_массива - 1
//lastElement 	Значение последнего элемента массива

//const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
//const lastElementIndex = fruits.length - 1;
//const lastElement = fruits[lastElementIndex];


//Задание 9

//Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

//function getExtremeElements(array) {
  // Change code below this line
//const deletedArray = array.splice(1,array.length - 2);
//return array;
 
  // Change code above this line
//}
//console.log(getExtremeElements(["Earth", "Mars", "Venus"]));


//Задание 10

//Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

//function splitMessage(message, delimeter) {
//  let words;
  // Change code below this line
//words = message.split(delimeter);
  // Change code above this line
//  return words;
//}
//console.log(splitMessage("Mango hurries to the train", " "));
//console.log(splitMessage("Mango", ""));
//console.log(splitMessage("best_for_week", "_"));


//Задание 11

//Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

//Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

//Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

//function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
//const pr = message.split(" ");
//const price = pr.length * pricePerWord;
//  return price;

   // Change code above this line
//}
//console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//console.log(calculateEngravingPrice("Web-development is creative work", 40));
//console.log(calculateEngravingPrice("Web-development is creative work", 20));


//Задание 12

//Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

//function makeStringFromArray(array, delimeter) {
//  let string;
  // Change code below this line
//string = array.join(delimeter);

  // Change code above this line
//return string;
//}
//console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
//console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
//console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


//Задание 13

//Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

//Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.
//Внимание

//Slug это всегда строка в нижнем регистре, слова которой разделены тире.

//Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

//    Значением параметра title будут строки, слова которых разделены только пробелами
//    Все символы slug должны быть в нижнем регистре
//    Все слова slug должна быть разделены тире

//function slugify(title) {
  // Change code below this line
  
//const titleArray = title.toLowerCase().split(" ");
//const slug = titleArray.join('-');
//return slug;
  // Change code above this line
//}
//console.log(slugify("Arrays for begginers"));
//console.log(slugify("English for developer"));
//console.log(slugify("Ten secrets of JavaScript"));


//Задание 14

//Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

//    firstTwoEls - массив из первых двух элементов
//    nonExtremeEls - массив из всех элементов кроме первого и последнего
//    lastThreeEls - массив из трёх последних элементов

//const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
//const firstTwoEls = fruits.slice(0,2);
//const nonExtremeEls = fruits.slice(1,4);
//const lastThreeEls = fruits.slice(-3);


//Задание 15

//Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

//const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
//const newClients = ['Peach', 'Houston'];

//const allClients = oldClients.concat(newClients); // Change this line


//Задание 16

//Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

//Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

//function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
//const newArray = firstArray.concat(secondArray);
//  if (newArray.length > maxLength) 
//  {const newsArray = newArray.slice(0, maxLength); 
//   return newsArray;}
//  return newArray;

    // Change code above this line
//  }
//console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));


//Задание 17

//Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

//const start = 3;
//const end = 7;

//for (let i = start; i <= end; i += 1) { // Change this line
//  console.log(i);
//}


//Задание 18

//Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

///function calculateTotal(number) {
 // Change code below this line
//  let sum = 0;
//for (let i = 0; i <= number; i += 1) {
//  sum += i;
//}
//return sum;
  // Change code above this line
//}
//console.log(calculateTotal(1));
//console.log(calculateTotal(3));
//console.log(calculateTotal(7));
//console.log(calculateTotal(18));
//console.log(calculateTotal(24));


//Задание 19

//Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

//const fruits = ['apple', 'plum', 'pear', 'orange'];

//for (let i = 0; i < fruits.length; i += 1) { // Change this line
//  const fruit = fruits[i]; // Change this line
//  console.log(fruit);
//}


//Задание 20

//Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

//function calculateTotalPrice(order) {
//  let total = 0;
  // Change code below this line
//for (let i = 0; i < order.length; i += 1)
//{total += order[i]}
  // Change code above this line
//  return total;
//}


//Задание 21

//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

//function findLongestWord(string) {
  // Change code below this line
//const stringArray = string.split(' ');
//  let maxNumber = 0;
//  let max = 0;
//  for (let i = 0; i < stringArray.length; i += 1)
//  { 
//if (stringArray[i].length > maxNumber) 
//	{maxNumber = stringArray[i].length;
//    max = i}
//  }
//  return stringArray[max];

  // Change code above this line
//}
//console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//console.log(findLongestWord("Google do a roll"));
//console.log(findLongestWord("May the force be with you"));


//Задание 22

//Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

//function createArrayOfNumbers(min, max) {
//  const numbers = [];
  // Change code below this line
//for (let i = min; i <= max; i += 1)
//{numbers.push(i)}
  // Change code above this line
//  return numbers;
//}
//console.log(createArrayOfNumbers(1, 3));
//console.log(createArrayOfNumbers(14, 17));


//Задание 23

//Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

//function filterArray(numbers, value) {
   // Change code below this line
//const newNumbers = [];
//  for (let i = 0; i < numbers.length; i += 1)
//  {if (numbers[i] > value) {newNumbers.push(numbers[i])}
//  }
//return newNumbers;

  // Change code above this line
//}

//console.log(filterArray([1, 2, 3, 4, 5], 3));
//console.log(filterArray([1, 2, 3, 4, 5], 4));
//console.log(filterArray([1, 2, 3, 4, 5], 5));
//console.log(filterArray([12, 24, 8, 41, 76], 38));


//Задание 24

//Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

//Дополни код функции так, что если:

//    фрукт есть в массиве, то функция возвращает true;
//    фрукта нет в массиве, то функция возвращает false.

//function checkFruit(fruit) {
//  const fruits = ["apple", "plum", "pear", "orange"];

//  return fruits.includes(fruit); // Change this line
//}

//console.log(checkFruit("plum"));
//console.log(checkFruit("mandarin"));
//console.log(checkFruit("pear"));


//Задание 25

//Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

//Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

//Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

//function getCommonElements(array1, array2) {
  // Change code below this line
//const newArray = [];
//  for (const element of array1)
//   		{if (array2.includes(element))
//               {newArray.push(element);}
//  }
//return newArray;

 // Change code above this line
//}
//console.log(getCommonElements([1, 2, 3], [2, 4]));
//console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
//console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));


//Задание 26

//Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

//function calculateTotalPrice(order) {
//  let total = 0;
  // Change code below this line

//  for (const element of order) {
//    total += element;
//  }

  // Change code above this line
//  return total;
//}


//Задание 27

//Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

//function filterArray(numbers, value) {
  // Change code below this line
//  const filteredNumbers = [];

//  for (const number of numbers) {
//        if (number > value) {
//      filteredNumbers.push(number);
//    }
//  }

//  return filteredNumbers;
  // Change code above this line
//}
//console.log(filterArray([1, 2, 3, 4, 5], 3));
//console.log(filterArray([1, 2, 3, 4, 5], 4));
//console.log(filterArray([1, 2, 3, 4, 5], 5));
//console.log(filterArray([12, 24, 8, 41, 76], 38));
//console.log(filterArray([12, 24, 8, 41, 76], 20));


//Задание 28

//Дополни выражения остатка от деления так, чтобы код проходил тесты.

// Change code below this line
//const a = 3 % 1;
//const b = 4 % 3;
//const c = 11 % 4;
//const d = 12 % 7;
//const e = 8 % 6;

//Тесты

//    Объявлена переменная a
//    Значение переменной a это число 0
//    Объявлена переменная b
//    Значение переменной b это число 1
//    Объявлена переменная c
//    Значение переменной c это число 3
//    Объявлена переменная d
//    Значение переменной d это число 5
//    Объявлена переменная e
//    Значение переменной e это число 2


//Задание 29

//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

///function getEvenNumbers(start, end) {
   // Change code below this line
//  const even = [];
//for (let i = start; i <= end; i += 1)
//{if (i % 2 === 0)
//{even.push(i)}}
//return even;
    // Change code above this line
//  }
//console.log(getEvenNumbers(2, 5));
//console.log(getEvenNumbers(3, 11));
//console.log(getEvenNumbers(6, 12));
//console.log(getEvenNumbers(8, 8));


//Задание 30

//Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

//const start = 6;
//const end = 27;
//let number;

//for (let i = start; i < end; i += 1) {
//  if (i % 5 === 0) {
//    number = i;
//    break;
//  }
//}
//console.log(number);


//Задание 31

//Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

//    возвращала первое число от start до end, которое делится на divisor без остатка
//    не использовала оператор break
//    не использовала переменную number

//function findNumber(start, end, divisor) {
  // Change code below this line
//  //let result;

//  for (let i = start; i < end; i += 1) {
//    if (i % divisor === 0) {
//     // result = i;
//      return i;
//    }
//  }

//  //return result;
  // Change code above this line
//}
//console.log(findNumber(2, 6, 5));
//console.log(findNumber(8, 17, 3));
//console.log(findNumber(6, 9, 4));


//Задание 32

//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

//При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
  // Change code below this line
    let result;
for (let element of array)
{if (element === value)
{  return true;
  //result = true;
 //break;
} 
 
 else {
 result = false};
}
  return result;
  // Change code above this line
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));





