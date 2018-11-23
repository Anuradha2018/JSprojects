/*var zomato = require('zomato');

var client = zomato.createClient({
    userKey: config.KEY,
  });*/

const userKey = config.KEY;
// const url = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + userKey;
key = 16774318;
const url = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=22dfabdd1b000cbc009e9d72561d75cc'+ key;
function fetchJSONData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const req = new XMLHttpRequest();

    req.addEventListener('load', function(data) {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            const responseText = req.responseText;
            const data = JSON.parse(responseText);
            callback(data);
        } else {
            console.error('Something is probably wrong with the url');
        }
    });

    req.addEventListener('error', function() {
        console.error('Server error like timeout');
    });

    // initializes a request with an http method
    req.open("GET", url);
    // Sends the request
    req.send();
}




const form = document.querySelector('#searchForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const searchString = formData.get('searchString');

    const tbody = document.querySelector('#ResList > tbody');
    tbody.innerHTML = '';

    fetchJSONData(url, data => {



        if (data.Response === 'False') {
            alert(data.Error);
            return;
        }


        for (const res of data.Search) {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);

            tr.innerHTML = `<td>
                <a href='#' class='ResName'>${res.name}</a>
                <div class='ResLocation'></div>
                </td>
                <td>
                    <img height="150" src="${res.location}">
                </td>
            `;

            const link = tr.querySelector('.ResName');
            const div = tr.querySelector('.ResLocation');

            link.addEventListener('click', (event) => {
                event.preventDefault();

                showMovieDetails(res, div);
            })

        }

    });
});


function showMovieDetails(res, div) {
    key = 16774318;
    // const url = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + userKey;
    const url = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + key;

    fetchJSONData(url, resDetails => {
        div.innerHTML = `
                IMDB Rating: ${resDetails.name} <br>
                IMDB Votes count: ${resDetails.location} <br>
                Director: ${resDetails.user_rating} <br>
            `;

    });
};

/*function showResDetails(){
    const userKey = config.KEY;
    const url = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + userKey;
    fetchJSONData(url, resDetails =>{
        console.log(resDetails.name);
    });
}
*/
