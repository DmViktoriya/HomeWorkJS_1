// TASK 1
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
function pow(x, n) {
  return x ** n;
}
// console.log(pow(5, 4));
// TASK 2
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function newArr(array) {
//   const arr = [];
//   for (let i = 0; i < array.length; i += 2) {
//     arr.push(array[i] + array[i + 1]);
//   }
//   return arr;
// }
// console.log(newArr(someArr));
// TASK 3
// Напишите решение, которое вычисляет
// квадратныt корнb для всех чисел у которых квадратный корень будет целым числом
// и пушит их в новый массив. Функция возвращает массив
// const arr = [4, 3, 5, 16, 16, 33, 4, 9];
// function newArr(array) {
//   const arr = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] % Math.sqrt(array[i]) === 0) {
//       arr.push(Math.sqrt(array[i]));
//     }
//   }
//   return arr;
// }
// console.log(newArr(arr));
// квадратный корень Math.sqrt()
// TASK 4
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total. Операция ввода числа продолжается
// до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как
// пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Сделать проверку на то что пользователь ввел именно число.
// let input;
// let total = 0;
// do {
//   input = prompt("Введите число");
//   isNaN(input)
//     ? alert("Введено не число, повторите попытку")
//     : (total += Number(input));
// } while (input !== null);
// alert(`Сумма чисел равна: ${total}`);
// TASK 5
// привести массив к одному уровню
const tryThis = [
  [23, 11, ["hello", "world", "Vasya"], { name: "John" }],
  "some str",
  [777, "word", ["Привет", ["как сюда добраться"]]],
];
// console.log(tryThis.join(",").split(",")); // 1 способ
// console.log(tryThis.flat(Infinity));
// TASK 6
// даны 2 массива
const nums = [1, "b", 3, "d", 5];
const strs = ["a", 2, "c", 4, "e"];
// Напишите функцию которая будет принимать 2 массива в качестве аргументов
// и вернет новый массив ['1a', '2b', '3c', '4d', '5e']
// function newArray(x, y) {
//   const arr = [];
//   for (let i = 0; i < x.length; i += 1) {
//     typeof x[i] !== "number" ? arr.push(y[i] + x[i]) : arr.push(x[i] + y[i]);
//   }
//   return arr;
// }
// console.log(newArray(nums, strs));
// TASK 7
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);
styles.splice(styles.length / 2, 1, "Классика");
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);