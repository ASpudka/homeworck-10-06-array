//concat
//1.Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = array1.concat(array2);
// console.log (array3);

//reverse
//2.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
const array4 = array1.reverse();
//console.log (array4);

//push, 
//3.Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const array5 = array1.push(4,5,6);
//console.log (array1);

//unshift
//4.Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const array6 = array1.unshift(4,5,6);
//console.log (array1);

//shift
//5.Дан массив [js;, css, html]. Выведите на экран первый элемент и удалите его.
const array7 = ['js','css','html']
array7.shift();
//console.log (array7);

//pop
//6.Дан массив [&#39;js&#39;, &#39;css&#39;, ‘html&#39;]. Выведите на экран последний элемент и удалите его.
array7.pop();
//console.log (array7);

//slice
// 7.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [1, 2, 3].
// 8.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [4, 5].

// const array8 = [1,2,3,4,5];
// const array9 = array8.slice(0,3);
//  const array10 = array8.slice(3);
// console.log(array9);
//  console.log(array10);

//splice
//9.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const array11 = array8.splice(0,1)
// const array12 = array8.splice(2,3)
// console.log(array11);
// console.log(array12);
// const array13 = array11.concat(array12);
// console.log(array13);

//10.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// const array14 = array8.splice(1,3);
// console.log(array14);

//11.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из негомассив [1, 2, 3, 'a','b', 'c', 4, 5].
// const array15 = ['a','b','c'];
// const array16 = array9.concat(array15.concat(array10))
// console.log(array16 );

//12.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, a, b, 2, 3, 4,c, 5, e].
// array15.push('e');

const getArray17 = () => { 
  const array17 = array8.slice(0,1)
  .concat(array15.slice(0,2))
  .concat(array8.slice(1,4))
  .concat(array15.slice(2,3))
  .concat(array8.slice(4))
  .concat(array15.slice(3));
return array17;
}
// console.log(getArray17());

//sort
//13.Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const array18 =[3,4,1,2,7];
console.log(array18.sort());


//Object.keys
//14.Дан объект {js:test, jq: hello, css: world}. Получите массив его ключей.
const obj ={
  js:'test',
  jq: 'hello',
  css: 'world',
}
console.log(Object.keys(obj));