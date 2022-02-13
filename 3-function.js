// Задание 1.Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}

let i = 0
while ( i < 3) {
    alert( `number ${i}!` );
    i++
    }    


// Задание 2.Перепишите код с использованием тернарного оператора

let male = true;
let gender;
if (male) {
gender = 'man';
} else{
gender = 'woman'
}

let male = true;
let gender = male ? true : false;


// Задание 3.Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
// [true, false]
// должно получиться
// [{ gender: 'man' }, { gender: 'woman' }]

// с помощью цикла обойти первый массив, внутри цикла проверять значение элемента если оно true то пушить в новый массив обЪект gender man,а если false то пушить объект gender woman


let array = [true, false, false, true];
let newArray = [];
for(let i = 0; i < array.length; i++) {
    if (array[i] == true) {
        newArray.push({gender: 'man'})
    } else {
        newArray.push({gender: 'woman'})
    }
}
console.log(newArray);

// Задание 4. Создайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.

// 1)
    function findPositiveNumbers() {
        let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] >= 0) {
                console.log(arr[i]);
            }
        }
    }
    findPositiveNumbers();

// 2)
    function findPositiveNumbers() {
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
    findPositiveNumbers();

// 3)
function findPositiveNumbers() {
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    let newArr = [];
     for(let i = 0; i < arr.length; i++) {
         if(arr[i] >= 0) {
             newArr.push(arr[i]);
         }
     }
     return newArr;
}
let result = findPositiveNumbers();
console.log(result);

// 4)
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
function findPositiveNumbers(array) {
    let newArr = [];
     for(let i = 0; i < arr.length; i++) {
         if(arr[i] >= 0) {
             newArr.push(arr[i]);
         }
     }
     return newArr;
}
let result = findPositiveNumbers(arr);
console.log(result);

// Задание 5. Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']

function createArray(count, content) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(content);
    }
    return arr;
}

let result = createArray(7, 'ilya');
console.log(result);

// Задание 6. Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

 let arr = [5, 4, 3, 8, 0];
function  filterFor(array, a) {
    let newArr = [];
    for (let i = 0; i < a; i++) {
        if (array[i] >= a) {
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(filterFor(arr, 4));

// Задание 7. Написать функцию вывтода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию

function getRandomRGB(){
    let r = getRandomInteger(0, 255);
    let g = getRandomInteger(0, 255);
    let b = getRandomInteger(0, 255);
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }


// Задание 8.Написать функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат (!!! решить без оператора **)

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++ ) {
        result = x * result;
    }
    return result;
}
console.log(pow(3,4));

// Задание 9. Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.

function isInteger(x) {
    if (x % 1 == 0) {
        return true 
    } else {
        return false
    }
}
console.log(isInteger(2.2));
