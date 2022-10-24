const searchButton = document.getElementById('searchButton');


searchButton.addEventListener('click', ()=>{
    const query = document.getElementById('inputSearch').value;
    multiSearch(query)
});

