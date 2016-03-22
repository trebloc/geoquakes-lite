var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37, lng: -122},
    zoom: 8
  });  

$.ajax({
    method:'GET',
    url: weekly_quakes_endpoint,
    success: function (data) {
      data.features.forEach(function (element){
        var results = element.properties.title;
        var longitutde = element.geometry.coordinates[0];
        var latitude = element.geometry.coordinates[1];        
        var mag = element.properties.mag;
        var time = Math.round( ( Date.now() - element.properties.time ) / (1000*60*60) );
			// $('#info').append("<p>" + location + "</p>");
			// $('#info').append("<p>" + "latitude: " + latitude + "</p>");
			// $('#info').append("<p>" + "longitutde: " + longitutde + "</p>");	
			// $('#info').append("<p>" + "time of event: " + time + " hours ago" +"</p>");		
    
      $('#info').append("<p>" + results + " Longitutde - " + longitutde + " Latitude - " + latitude + "<br>" + " Time - " + time + " hours ago</p>");
      });
    }
  });



})

// This is a code snippet that will place a pin at the coordinates lat & lng

new google.maps.Marker({
  position: new google.maps.LatLng(lat,lng),
  map: map,
  title: title
});


/*
$.ajax({
    method:'GET',
    url:'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
    success: function (data) {
        var location = data.features[0].properties.title;
        var latitude = data.features[0].geometry.coordinates[0];
		var longitutde = data.features[0].geometry.coordinates[1];
		var time = data.features[0].properties.time;
		time = time - Date.now();
		time = time / 1000 / 60 / -60;
		time = Math.round(time);
			$('#info').append("<p>" + location + "</p>");
			$('#info').append("<p>" + "latitude: " + latitude + "</p>");
			$('#info').append("<p>" + "longitutde: " + longitutde + "</p>");	
			$('#info').append("<p>" + "time of event: " + time + " hours ago" +"</p>");		
    }
})
*/

      //   //var location = data.features[0].properties.title;
      //   var latitude = data.features[0].geometry.coordinates[0];
        // var longitutde = data.features[0].geometry.coordinates[1];
        // var time = data.features[0].properties.time;
        // time = time - Date.now();
        // time = time / 1000 / 60 / -60;
        // time = Math.round(time);
