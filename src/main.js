// import {API_KEY,BASE_URL} from "./key.js";
const API_KEY = "c3e436768b2349eb1d333dffdf68fc72"
const BASE_URL= 'https://api.themoviedb.org/3';

async function multiSearch(query='shrek'){
    const response = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`)
    const data = await response.json();
    
    console.log(data);
    const movie = data.results[0];
    
    console.log(movie);
        
    if (movie.media_type === 'movie') {
        getProviderMovie(movie.id)
    }else if(movie.media_type === 'tv'){
        getProviderTv(movie.id)
    }else{
        
    }
}

async function getProviderMovie(ID){
    const response = await fetch(BASE_URL+`/movie/${ID}/watch/providers?api_key=${API_KEY}`)
    const data = await response.json();
    
    const flatrate = data.results.AR.flatrate;
    const rent = data.results.AR.flatrate;
    
    flatrate.forEach(provider => {
        console.log(provider.provider_name); 
    });
    rent.forEach(provider => {
        console.log(provider.provider_name); 
    });
}

async function getProviderTv(ID){
    // const response = await fetch(BASE_URL+`/movie/${ID}/watch/providers?api_key=${API_KEY}`)
    // const data = await response.json();
    
    // const flatrate = data.results.AR.flatrate;
    // const rent = data.results.AR.flatrate;
    
    // flatrate.forEach(provider => {
        //     console.log(provider.provider_name); 
        // });
        // rent.forEach(provider => {
            //     console.log(provider.provider_name); 
            // });
}

// const searchButton = document.getElementById('searchButton');
// const query = document.getElementById('inputSearch').value;
// searchButton.addEventListener('click',multiSearch(query))
