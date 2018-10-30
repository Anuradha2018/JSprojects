$(document).ready (()=> {
    //creating an event for when theform is submitted
    $('#searchForm').on('submit', (e)=> {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    axios.get('http://www.omdbapi.com?s='+searchText)
    .then(()=> {
        console.log(response);
        let movies = response.data.Search;
        let output = '';
        $.each(movies, (index, movie) =>{
            output += `
            
            `;
        });
    })
    .catch((err)=> {
        console.log(err);
    });
}