//import {API_KEY,BASE_URL} from "./key.js";

const BASE_URL= 'https://api.themoviedb.org/3';

async function multiSearch(query){
    const response = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`)
    const data = await response.json();
    
    const movie = data.results[0];
    console.log(movie)
    if (movie.media_type === 'movie') {
        const movieName = data.results[0].title;
        getProviderMovie(movieName,movie.id)
    }else if(movie.media_type === 'tv'){
        const movieName = data.results[0].name;
        getProviderTv(movieName,movie.id)
    }
}

async function getProviderMovie(movieName,ID){
    const response = await fetch(BASE_URL+`/movie/${ID}/watch/providers?api_key=${API_KEY}`)
    const data = await response.json();
    
    const flatrate = data.results.AR.flatrate;
    
    createProviders(movieName,flatrate)
}

async function getProviderTv(movieName,ID){
    const response = await fetch(BASE_URL+`/tv/${ID}/watch/providers?api_key=${API_KEY}`)
    const data = await response.json();
    
    const flatrate = data.results.AR.flatrate;
    
    createProviders(movieName,flatrate)
}


const result = document.querySelector('.result') 
function createProviders(movieName,provider){
    
    console.log(provider);
    
    result.innerHTML='';
    const title = document.createElement('strong')
    title.innerHTML = movieName;
    
    const text = document.createElement('p')
    text.textContent = 'se encuentra disponible en:';

    result.appendChild(title);
    result.appendChild(text);
    
    for (let i = 0; i < provider.length; i++) {
        const nameLink = document.createElement('a');
        if(provider.length === 1 || i === 0){
            nameLink.textContent = provider[i].provider_name
        }
        else if (i >0 && i < provider.length-1 ) {
            const coma = document.createElement('span')
            coma.textContent = ',';
            nameLink.textContent = provider[i].provider_name;

            result.appendChild(coma)
        }
        else{
            const and = document.createElement('p');
            and.textContent = ' y ';
            nameLink.textContent = provider[i].provider_name;
            result.appendChild(and);
        }
        nameLink.classList.add('linkProvider')
        result.appendChild(nameLink);
    }
}

   

    
