"use strict";
// 1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
//2.Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

const hasElem = (array, str) => {
  return console.log(array.includes(str));
};

const array1 = [1, 2, "hello", 3, 4];
console.log(hasElem(array1, "hello"));

//3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - вернуть true [2,2,1], а если нет - вернуть false [1,2,1].

const identicNumber = (array) => {
  return array.forEach(arr => {
    arr === 2;
  });
          }
  
const array2 = [2, 2, 2];
const array3 = [1, 2, 1];
console.log(identicNumber(array2));
