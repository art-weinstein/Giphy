import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $('#findGif').click(function() {
    const searchWord = $('#gif').val();
    $('#gif').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchWord}&limit=5&offset=0&rating=g&lang=en`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      let imageUrl = response.data[0].images.original.url;
      $('.img1').html('<img src="' + imageUrl + '">');
      $('.img2').html(`<img src=" ${response.data[1].images.original.url}">`);
      $('.img3').html(`<img src=" ${response.data[2].images.original.url}">`);
      $('.img4').html(`<img src=" ${response.data[3].images.original.url}">`);
    }
  });
  $('#trending').click(function() {
    
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=4&offset=0&rating=r&lang=en`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.trend1').html(`<img src=" ${response.data[0].images.original.url}">`);
      $('.trend2').html(`<img src=" ${response.data[1].images.original.url}">`);
      $('.trend3').html(`<img src=" ${response.data[2].images.original.url}">`);
      $('.trend4').html(`<img src=" ${response.data[3].images.original.url}">`);
    }
  })
})

// $('.img1').html(`<img src="${response.data[0].images.original.url}"`)
