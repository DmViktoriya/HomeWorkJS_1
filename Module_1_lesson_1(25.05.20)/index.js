 // Задание 6
//
//Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. 
//Объяви переменные и присвой им соответствующие значения://pricePerDroid - цена одного дроида, значение 800
  //  orderedQuantity - количество дроидов в заказе, значение 6
  //  deliveryFee - стоимость доставки, значение 50
  //  totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
  //  message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

//const pricePerDroid = 800;
//const orderedQuantity = 6;
//const deliveryFee = 50;
//let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
//const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//console.log(totalPrice);
//console.log(message); 


//Задание 7

//Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". 
//После объявления вызови функцию sayHi.

//function sayHi() {
//  console.log("Hello, this is my first function!");
//}
//sayHi();


//Задание 8

//Функция add должна уметь складывать три числа и выводить результат в консоль.
//Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
//Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>",
 //   где < result > это сумма переданных чисел.

//function add(a,b,c) {
//  console.log(`Addition result equals ${(a+b+c)}`);
  // Change code above this line
//}

//add(15, 27, 10);
//add(10, 20, 30);
//add(5, 10, 15);


//Задание 9

//Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

//function add(a, b, c) {
  //return (a+b+c);  
//}

//add(2, 5, 8); // 15

//console.log(add(15, 27, 10));
//console.log(add(10, 20, 30));
//console.log(add(5, 10, 15));

//Задание 10

//Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. 
//Она объявляет два параметра, значения которых будут задаваться во время её вызова.

   // name - название товара
   // price - цена товара

//Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.

//function makeMessage (name, price) {
  // Change code below this line
   //const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
 // return message;
//};
//console.log(makeMessage('Radar', 6150));


//Задание 11

//Функция calculateTotalPrice считает и возвращает общую сумму покупки. 
//Она принимает два параметра, значения которых будут задаваться во время её вызова.

   // orderedQuantity - количество единиц товара в заказе;
   // pricePerItem - цена одной единицы товара.

//Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, 
//результат умножения кол - ва товаров на цену одного.

//function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
 // const totalPrice = (orderedQuantity * pricePerItem);

  // Change code above this line
 // return totalPrice;
//};


//Задание 12

//Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

  //  orderedQuantity - количество дроидов в заказе
  //  pricePerDroid - цена одного дроида
  //  deliveryFee - стоимость доставки

//Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.

//function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
//let totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
//const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
 // return message;
//}
//console.log(makeOrderMessage(2, 100, 50));

//Задание 13

//Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

//function isAdult(age) {
  // Change code below this line
 // const passed = (age >= 18);
  // Change code above this line
 // return passed;
//}


//Задание 14

//Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

//Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

//function isValidPassword(password) {
 // const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
 // const isMatch = (password === SAVED_PASSWORD);
  // Change code above this line
  //return isMatch;
//}


//Задание 15

//Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

//  Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
//  В противном случае должен выполняться блок else и записывается строка "You are a minor"

//function checkAge(age) {
//  let message;

//  if (age >= 18) { // Change this line
//    message = 'You are an adult';
//  } else {
//    message = 'You are a minor';
//  }

//  return message;
//}

//Задание 16

//Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

//    available - общее количество товаров на складе
//    ordered - единиц товара в заказе

//Используя ветвления дополни код функции так, что:

//    Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
//    В противном случае записывается строка "Order is processed, our manager will contact you.".

//function checkStorage(available, ordered) {
//  let message;
  // Change code below this line
//if (available < ordered) {message = `Not enough goods in stock!`} else {message = `Order is processed, our manager will contact you.`};
  // Change code above this line
//  return message;
//}

//Задание 17

//Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

//let a = 5;
//let b = 10;
//let c = 15;
//let d = 20;

// Change code below this line
//a += 2;
//b -= 4;
//c *= 3;
//d /= 10;

//Задание 18

//Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

//Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

//    pricePerDroid - цена одного дроида
//    orderedQuantity - кол-во заказанных дроидов
//    customerCredits - сумма средств на счету клиента

//Дополни её следующим функционалом:

//    Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
//    Добавь проверку сможет ли клиент оплатить заказ:
//        если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
//        в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

//function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//  let message;
  // Change code below this line
//let totalPrice = (pricePerDroid * orderedQuantity);
//  if (totalPrice > customerCredits) {message = `Insufficient funds!`} else {message =`You ordered ${orderedQuantity} droids, you have ${(customerCredits - totalPrice)} credits left`};
  // Change code above this line
//  return message;
//}
//console.log(makeTransaction(3000, 5, 23000));


//Задание 19

//Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

//    Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
//    Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
//    Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

//function checkPassword(password) {
//  const ADMIN_PASSWORD = 'jqueryismyjam';
//  let message;

//  if (password === null) { // Change this line
//    message =  'Canceled by user!';
//  } else if (password === ADMIN_PASSWORD) { // Change this line
//    message = 'Welcome!';
//  } else {
//    message = 'Access denied, wrong password!';
//  }

//  return message;
//}


//Задание 20

//Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

//    available - доступное количество товаров на складе
//    ordered - единиц товара в заказе

//Используя ветвления дополни код функции так, что:

//    Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
//    Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
//    В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

//function checkStorage(available, ordered) {
//  let message;
  // Change code below this line
//if (ordered === 0) {message = `There are no products in the order!`} else if (ordered > available) {message = `Your order is too large, there are not enough items in stock!`} else {message = `The order is accepted, our manager will contact you`};
  // Change code above this line
//  return message;
//}
//console.log(checkStorage(100, 50));


//Задание 21

//Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

//    number - число, вхождение которого проверяется
//    start - начало числового промежутка
//    end - конец числового промежутка

//Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

//function isNumberInRange(start, end, number) {
//  const isInRange = ((number >= start) && (number <= end)) ; // Change this line

//  return isInRange;
//}


//Задание 22

//Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

//Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

//function checkIfCanAccessContent(subType) {
//  const canAccessContent = ((subType === "pro")||(subType === "vip")); // Change this line

//  return canAccessContent;
//}
//console.log(checkIfCanAccessContent("pro"));


//Задание 23

//Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

//Она объявляет три параметра, значения которых будут задаваться во время её вызова:

//    number - число, не вхождение которого проверяется
//    start - начало числового промежутка
//    end - конец числового промежутка

//Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

//function isNumberNotInRange(start, end, number) {
//  const isInRange = number >= start && number <= end;
//  const isNotInRange = (!isInRange); // Change this line

//  return isNotInRange;
//}


//Задание 24

//Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

//Используя ветвления и логические операторы, дополни код функции.

//    Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
//    Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
//    Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
//    Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)

//Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

//function getDiscount(totalSpent) {
//  const BASE_DISCOUNT = 0;
//  const BRONZE_DISCOUNT = 0.02;
//  const SILVER_DISCOUNT = 0.05;
//  const GOLD_DISCOUNT = 0.1;
//  let discount;
  // Change code below this line
//if (totalSpent >= 50000) {discount = GOLD_DISCOUNT} else if (totalSpent >= 20000) {discount = SILVER_DISCOUNT} else if (totalSpent >= 5000) {discount = BRONZE_DISCOUNT} else {discount = BASE_DISCOUNT}
  // Change code above this line
//  return discount;
//}


//Задание 25

//Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

//function checkStorage(available, ordered) {
//  let message;
  // Change code below this line
  
//   if (ordered > available) {
//    message = "Not enough goods in stock!";
//  } else {
//    message = "The order is accepted, our manager will //contact you";
//  }
  
//message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
  // Change code above this line
//  return message;
//}


//Задание 26

//Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

//Используя тернарный оператор дополни функцию так, что:

//    Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
//    В противном случае, присвой message строку "Access denied, wrong password!".

//function checkPassword(password) {
//  const ADMIN_PASSWORD = "jqueryismyjam";
//  let message;
  // Change code below this line
//message = (password === ADMIN_PASSWORD) ? "Access is allowed" :  "Access denied, wrong password!";
  // Change code above this line
//  return message;
//}


//Задание 27

//Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

//Если значение параметра type это строка:

//    "starter" - цена подписки 0 кредитов.
//    "professional" - цена подписки 20 кредитов.
//    "organization" - цена подписки 50 кредитов.

//Изначально в теле функции была инструкция if...else, которая выглядела вот так.

//if (type === "starter") {
//  price = 0;
//} else if (type === "professional") {
//  price = 20;
//} else if (type === "organization") {
//  price = 50;
//}

//После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

//function getSubscriptionPrice(type) {
//  let price;
  // Change code below this line

// switch (type) { // Change this line
//    case "starter" : // Change this line
//      price = 0; // Change this line
//      break;

//    case "professional": // Change this line
//      price = 20; // Change this line
//      break;

//    case "organization": // Change this line
//      price = 50; // Change this line
//      break;
//  }

  // Change code above this line
//  return price;
//}


//Задание 28

//Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

//Если значение параметра password:

//    равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
//    совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
//    не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".

//Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

//function checkPassword(password) {
//  const ADMIN_PASSWORD = "jqueryismyjam";
//  let message;
  // Change code below this line
  //if (password === null) {
  //  message = "Canceled by user!";
  //} else if (password === ADMIN_PASSWORD) {
  //  message = "Welcome!";
  //} else {
  //  message = "Access denied, wrong password!";
  //}
//  switch (password) {
//    case null:
//      message = "Canceled by user!";
//    break;
//    case ADMIN_PASSWORD:
//    message = "Welcome!";
//    break;
//    default:
//      message = "Access denied, wrong password!";
//  }

  // Change code above this line
//  return message;
//}


//Задание 29

//Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

//Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

//Список стран и стоимость доставки:

//    China - 100 кредитов
//    Chile - 250 кредитов
//    Australia - 170 кредитов
//    Jamaica - 120 кредитов

//Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

//function getShippingCost(country) {
//  let message;
  // Change code below this line
//switch (country) {
//    case "China":
//    message = "Shipping to China will cost 100 credits";
//    break;
//    case "Chile":
//    message = "Shipping to Chile will cost 250 credits";
//    break;
//    case "Australia":
//    message = "Shipping to Australia will cost 170 credits";
//    break;
//    case "Jamaica":
//    message = "Shipping to Jamaica will cost 120 credits";
//    break;
//    default : message = "Sorry, there is no delivery to your country";
//}
  // Change code above this line
//  return message;
//}


//Задание 30

//Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

//function getNameLength(name) {
//  const message = `Name ${name} is ${name.length} characters long`; // Change this line

//  return message;
//}


//Задание 31

//Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

//    courseTopicLength - длина строки.
//    firstElement - первый символ строки.
//    lastElement - последний символ строки.

//const courseTopic = "JavaScript essentials";
// Change code below this line

//const courseTopicLength = courseTopic.length;
//const firstElement = courseTopic[0];
//const lastElement = courseTopic[courseTopic.length-1];

// Change code above this line


//Задание 32

//Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

//    string - оригинальная строка
//    length - количество символов с начала строки для подстроки

//Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.













// function sum() {
//     return 2 + 3;
// }

// let result = sum();

// console.log(result)



// Ошибки в консоли

// const name;

// console.log(age);
// let age;

// console.log('HELLO WORLSd')

// Определение типа значения, оператор typeof
// Валидация форм

// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error);
// console.log(typeof quantity);

// Шаблонные строки
// // Написать фразу с помощью шаблонных строк Здравствуйте, меня зовут А, мне Б лет и мне нравится Ц, где А, Б, Ц - переменные вставленные в строку.


// const name = 'Манго';
// const age = 5;
// const hobby = 'плавать';
// const message = `Здравствуйте, меня зовут ${name} мне ${age} лет и мне нравиться ${hobby}`;

// console.log(message);

// Prompt и confirm

// Спросить у пользователя имя, почту,  телефон и показать в консоле фразу "Пользоваель под именем ____ использует ____ почту и ____ телелефон"
// 1) Спросить имя юзера (prompt)
// 2) Спросить почту (prompt)
// 3) Спросить телефон (prompt)
// 4) Составить финальную фразу (template string)

// const userName = prompt('Enter your name');
// const email = prompt('Enter your email');
// const phoneNumber = prompt('Enter phon number');

// const message = `Пользоваель под именем ${userName} использует ${email} почту и ${phoneNumber} телелефон`;
// console.log(message);


// let userName, email, phone;

//  Базовые операторы +,-,*,/

// Проверка сложения

// let a = "Join ";
// let b = "us";
// console.log(a + b);
// console.log(typeof a + b)

// let a = 3;
// let b = ' join';
// console.log(a + b);

// let a = true;
// let b = " join";
// console.log(a + b);

// let a = true;
// let b = 12;
// console.log(a + b);

// let a = true;
// let b = true;
// console.log(a + b);

// let a = true;
// let b = "false";
// console.log(a + b);

// let a = 12;
// let b = null;
// console.log(a + b);

// let a = undefined;
// let b = 10;
// console.log(a + b);

// let a = undefined;
// let b = false;
// console.log(a + b);

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);
// console.log(typeof result);


// Обьект Math
// // Определить площадь круга с радиусом 10см (ПR(2)). Math.pow(a, b) - возведение в степень

// const rad = 10;
// const PI = Math.PI;
// const powRad = Math.pow(rad, 2);
// const result = PI * powRad;
// console.log('result', result)



// const rad = 10;
// const area = Math.PI * Math.pow(rad, 2);
// console.log(area);



//Операторы сравнения и приведение типов
// // Каким будет результат этих выражений?

// console.log(5 > 4);
// console.log(10 >= "7"); 
// console.log("2" > "12");
// console.log("2" < "12");
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// console.log("Ёнанас" < "ёжик");
// console.log("Ёнанас" === "ёжик");
// console.log(undefined == null);
// console.log(undefined === null);

// Посчитать суму товаров в козине магазина
// Нужно ввести цену 3-х товаров и посчитать их суму

// const phonePrice = Number(prompt('Enter phone price')); // 10
// const tvPrice = +prompt('Enter tv price'); // 12
// const playStationPrice = Number(prompt('Enter ps price')) // 8

// const result = phonePrice + tvPrice + playStationPrice;

// console.log(result); // 30




 
