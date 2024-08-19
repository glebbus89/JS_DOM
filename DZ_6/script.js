const url = '/DZ_6/data.json'
async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener('DOMContentLoaded', async (e) =>{
    const data = await getData(url);
    const list = document.querySelector('.products_box_content');
    data.forEach(element => {
        list.insertAdjacentHTML( 'beforeend',`
            <div class="products">
                    <img class="product__img" src="${element.img}" alt="${element.title}">
                    <div class="products_text">
                        <a href="#">
                            <h3 class="products_box_subtitle">${element.title}</h3>
                        </a>
                        <p class="products_box_text">${element.text}</p>
                        <p class="price">${element.price}</p>
                    </div>
            `)
    })
})