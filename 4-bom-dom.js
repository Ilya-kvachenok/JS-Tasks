// Задание 2. В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).

for (let li of document.body.children[0].children ) {
    console.log(li.innerText);
}

//Задание 3. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

document.body.children[0].children[0].innerText = '0';
document.body.children[0].children[1].innerText = '1';
document.body.children[0].children[2].innerText = '2';
document.body.children[0].children[3].innerText = '3';

// Задание 4. Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.\

function createElement (tagName, color, content) {
    let element = document.createElement(tagName);
    element.style.color = color;
    element.innerText = content;
    return element;
    // console.log(element);
    // document.body.appendChild(element);
}
console.log(createElement('h1', 'blue', 'hello'));
document.body.appendChild(createElement('p', 'red', 'privet'));


//Задание 5. Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

let p = document.createElement('p');
p.innerText = 'helldmcaskcvbakubcXKB Kygedfubk KUWQKB XKUWYqkbdyuke';
p.style.fontSize = '36px';
document.body.appendChild(p);


// Задание 6. Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

let select = document.querySelector('select');
for (let i = 1960; i < 2022; i++ ) {
    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
}




// Задание 7. Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// [{
// name: "Женя",
// order: true
// },
// {
// name: "Кристина",
// order: true
// },
// {
// name: "Павел",
// order: false
// },
// {
// name: "Виолетта",
// order: false
// },
// {
// name: "Костя",
// order: true
// }];
// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

let array = [{
    name: "Женя",
    order: true
    },
    {
    name: "Кристина",
    order: true
    },
    {
    name: "Павел",
    order: false
    },
    {
    name: "Виолетта",
    order: false
    },
    {
    name: "Костя",
    order: true
    }];

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        let status = array[i].order;
        if (array[i].order == true ) {
            status = 'оплатил';
            li.innerText = `Клиент ${array[i].name} ${status} заказ`
        } else {
            status = 'отменил';
           li.innerText = `Клиент ${array[i].name} ${status} заказ`
        }

       
       document.querySelector('ul').appendChild(li);
    }

// Зажание 8.Есть массив ссылок:
// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let div = document.createElement('div');
div.style.backgroundColor = 'red';
div.style.padding = '50px';
let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
for (let i = 0; i < linksArr.length; i++) {
    let a = document.createElement('a');
    let href = document.createElement('href')
    a.setAttribute('href', linksArr[i]);
    href.innerText = 'linksArr[i]';
}
document.body.appendChild(div);

// Задание 9. Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

let elements = document.querySelectorAll('.forRemove');
for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
}

