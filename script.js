const main = document.querySelector('.main');

function getApiData() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => {
        
        data.map((movie) => {

            // cria a div com a class 'card'
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // cria o elemento img e atribui a imagem do poster
            const img = document.createElement('img');
            img.setAttribute('class', 'movie__poster');
            img.setAttribute('src', movie.image);


            // cria o h1 e atribui o nome do filme
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
            
            // Aqui eu atribuo o elemento 'card' dentro do elemento 'main'
            main.appendChild(card);
            // O elemento 'img' dentro da div 'card'
            card.appendChild(img);
            // O elemento 'h1' dentro do elemento 'card'
            card.appendChild(h1);
        })
    })
}

getApiData();