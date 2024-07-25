// Задание 1
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)


// const div = document.querySelector('.block')
// const item = document.createElement('div')
// div.appendChild(item)
// item.textContent = 'Элемент внутри'
// item.style.color = 'blue'
// item.style.border = '1px solid black'
// item.style.backgroundColor = '#f8f8f8'
// item.style.padding = '16px'
// item.setAttribute('class', 'item_1')

// Задание 2
// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const p = document.querySelector('.text')
// console.log(p.previousElementSibling);
// console.log(p.parentNode); 
// console.log(p.parentNode.previousElementSibling);
// console.log(p.parentNode.parentElement);


// Задание 3
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// const x = document.querySelector('.subtitle');
// console.log(x.parentNode);
// console.log(x.parentNode.parentNode);
// console.log(x.parentNode.parentNode.parentNode);

// Задание 4
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

// const btn = document.querySelector('.btn');
// const input = document.querySelector('input');
// const form = document.querySelector('form')
// let h2
// btn.addEventListener('click', (event) => {
//     if (input.value.trim() === '') {
//         event.preventDefault()
//         if (!h2) { 
//             h2 = document.createElement('h2')
//             h2.textContent = "Поле на заполнено!"
//             input.after(h2) 
//         }
//         input.style.border = '2px solid red'
//     } else {
//         if(h2) {
//             h2.remove()
//             h2 = null
//         }
//         input.style.border = '2px solid black'
//         form.submit()
//         form.reset()
//     }
// })