$(document).ready(function() {

  var clientId = 'ec4d7008d30749028591badfc1dedfb5';
  var access_parameters = {client_id: clientId};

  // Makes an HTTP request to the Instagram API recent media 
  grabImages = function(access_parameters) {  

    // URL is hard-coded for one user
    var instagramUrl = 'https://api.instagram.com/v1/users/17438650/media/recent/?callback=?';

    // Make the HTTP request and then call onDataLoaded
    $.getJSON(instagramUrl, access_parameters, onDataLoaded);
  }

  // Runs when we get a response from Instagram
  onDataLoaded = function(instagram_data) {  

    // If the HTTP response code is 200 OK
    if(instagram_data.meta.code == 200) {

      var photos = instagram_data.data;

      // If the array of user's data isn't empty
      if(photos.length > 0) {

        // Iterate over the array of user's photos
        for (var i in photos ){
					debugger;
          //URL of photo
					var photo_url = photos[i].images.url;

          // photo.location.latitude
					var location_lat = photos[i].location.latitutde;
          // photo.location.longitude
					var location_lon = photos[i].location.longitude;
					
					

          // Append the img to the DOM
          $('#target').append(photo);
        }
      } else {
        // Display error if no photos in the array
        $('#target').append("Hmm...I couldn't find anything!");
      }
    } else {
      // Display error if the HTTP response code is not 200 OK
      var error = instagram_data.meta.error_message;
      $('#target').append("Something happened! Instagram says: " + error);
    }
  }

  // Call the grabImages function to start the whole process
  grabImages(access_parameters);

});