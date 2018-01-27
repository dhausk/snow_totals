
$(document).ready(function(){
    $('#search-button').click(function(){  //trigger event to get the snow report

      var searchValue = $('#search-val').val(); // getting the value of the search input
      var cast7 = $.getJSON(`https://api.aerisapi.com/winter/snowdepth/${searchValue}?client_id=ZO4TvgK5HVa3Yp5hBWgJq&client_secret=e2Tms67s7tsiCADmaZmWYJA9yd1GwncraFBLXZYO`);
      //performing the get
      cast7.done(function(snowdepth){
        var location = '';
          $.each(snowdepth.response.place, function(i, loc){ //function to get locations name.
            loc = loc.toUpperCase(); // converting toUpperCase
            location += loc + " "; //adding names together and storing in var location
          });
          $('#tsl').replaceWith(`<h2 id = 'tsl'>The snow report for ${location}</h2>`); //adding location to DOM

          $.each(snowdepth.response.periods, function(i ,item){ //function to get locations current snowdepth.
            $('#slist').replaceWith(`<ul id = 'slist'><li>${item.snowDepthIN} inches </li><li>${item.snowDepthCM} centimeters </li></ul>`); //adding list element to the DOM

          });
      });
    });
});
