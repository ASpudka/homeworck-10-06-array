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
  //разобрать массив
  //сравнить [i]!==[i+1]
  const arr = [...array]
  if(arr!==arr+1){
    return false;
  }return true;
}
//console.log(identicNumber(array2));
    
const array2 = [2, 2, 2];
const array3 = [1, 2, 1];
//console.log(identicNumber(array2));

//4. Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()

const getRamdom = () => {
const array = new Array;
for (let index = 0; index < 10; index++) {
  array.push(Math.round(Math.random()*(33-5)+5));
  }return array;
}
console.log(getRamdom());


//5. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const arrayNum =[12,15,20,25,59,79]
const getAverage = (array) => {
 const sum = array.reduce(function(accum,vol){
    return accum+vol;
  })
const length = array.length;
  return (`${sum/(length+1)}`);
}
console.log(getAverage(arrayNum));