// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// []()

// const clEl = document.querySelectorAll('.dropdown-item');
// clEl.forEach(elem => elem.classList.add('super-dropdown'));

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// []()

// const btnEl = document.querySelector('.btn');
// btnEl.classList.remove('btn-secondary')
// btnEl.classList.toggle('btn-secondary')

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// []()

// const clEl2 = document.querySelector('.menu');
// clEl2.classList.remove('dropdown-menu')

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// []()

// const divEl = document.querySelector('.dropdown');
// divEl.insertAdjacentHTML("afterend", `<a href="#">link</a>`)

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()

// const idEl = document.querySelector('#dropdownMenuButton');
// idEl.id = 'superDropdown'

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()

// document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// document.querySelector(".dropdown-toggle").removeAttribute("type")