let div1 = document.createElement('div');
let body1 = document.querySelector('body');
body1.appendChild(div1);

let parseData = JSON.parse(data1)
 console.log(parseData);

parseData.message.forEach(element => {
    div1.insertAdjacentHTML('beforeend', `
        <figure>
        <img src="${element}" alt="Elephant at sunset" />
        <figcaption>An elephant at sunset</figcaption>
        </figure>`
    )
});

let url = "https://jsonplaceholder.typicode.com/users";
async function getData(url){
    const response = await fetch(url)
    const json = await response.json()
    return json
}

try {
    const myData = await getData(url);
    console.log(myData);
    myData.forEach(element => {
        div1.insertAdjacentHTML('beforeend', `
            <h2>${element.name}</h2>
            <p>${element.email}</p>
            `)
        
    });
} catch (error) {
    console.log(`Ошибка ${error.message}`);
}