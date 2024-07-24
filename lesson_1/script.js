// Задание 1 
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль

// const pEl = document.querySelector('p');
// console.log(pEl);

// Получите ссылку на первый абзац с классом www. и вывести его в консоль 

// const pEl2 = document.querySelectorAll('.www')[0]
// console.log(pEl2);

// Задание 2
// Дан тег Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 

// const url = document.querySelector('.link')
// url.textContent =  "link text js"
// url.href = "https://developer.mozilla.org/ru/" 

// Дан тег  
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const imgEl = document.querySelector('.photo')
// imgEl.src = 'https://developer.mozilla.org/static/media/mdn_contributor.14a24dcfda486f000754.png'

// Задание 3
// Дан тег  
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 

// const divEl = document.querySelector('.content')
// const pEl = document.createElement('p')
// pEl.textContent = 'Новый текстовый элемент'
// divEl.appendChild(pEl)
// divEl.remove()
// divEl.removeChild(pEl)
// pEl.remove()



// const div = document.querySelector('.content')
// const btn = document.createElement('button')
// div.appendChild(btn)
// btn.textContent = 'Отправить'
// let count = 0
// btn.onclick = () => {
// count++;
// console.log(count);
// }
// btn.addEventListener('click', () => {
//     count++;
//     console.log(count)
//     }) 
// новый способ клика

// const div = document.querySelector('.content')
// const btn = document.createElement('button')
// div.appendChild(btn)
// btn.textContent = 'Отправить'
// btn.addEventListener ('click', () => {
//     btn.textContent = 'Текст отправлен'
// })

// изменить текст кнопки на текст отправлен  







