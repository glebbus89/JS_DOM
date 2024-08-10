// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('Все теги прогрузились');
// });

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

// window.addEventListener('load', (event) => {
//     console.log('страница загрузилась');
// });

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// document.addEventListener('click', function(event){
//     const elClick = event.target.classList.contains('super_element');
//     let elClick2;
//     if (elClick) {
//         elClick2 = 'присутствует';
//     } else {
//         elClick2 = 'остутствует';
//     }
//     console.log(`Класс "super_element" ${elClick2} в элементе "${event.target.tagName.toLowerCase()}".`);
//     });

    // 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

    // const textareaElem = document.querySelector('textarea');
    // textareaElem.addEventListener('mouseover', function (e) {
    //     console.log('Вы навели на textarea ');
    // });

    // 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

    // const ul = document.querySelector("ul");
    // ul.addEventListener("click", function (event) {
    //     const target = event.target;
    //     if (target.tagName.toLowerCase() === "button") {
    //         console.log(target.textContent);
    //     }
    // });

    // 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

    // При выводе в консоль, при нажатии на кнопку в тэги ul выводится текст 5 задания, так как событие вначале обрабатывает тэг ul, кнопку, а потом поднимается по DOM к родительскому элементу, и уже выводит текст 3 задания.

    // 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
        // const item = document.querySelectorAll('ul li');
        // item.forEach((li, i) => {
        //     if ((i + 1) % 2 === 0 ) {
        //         li.style.backgroundColor = 'purple';
        //     }
        // });    









