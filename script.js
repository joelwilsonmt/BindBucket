
$( document ).ready(function() {
  //create arrays of lat and longitude across world:
  var interval = .1 //.15 degrees is about 10 miles in latitude
  var longitudeArray = [];
  var latitudeArray = [];
  var longStart = -180.0000;
  longitudeArray.push(longStart);
  var latStart = -90.0000;
  latitudeArray.push(latStart);
  //create long array:
  while (longStart <= 180) {
    longStart = (longStart + (interval)); //multiply by 2 to make squarical
    longitudeArray.push(longStart.toFixed(4));
  }
  //create array of north values:
  var north = [];
  var start = 0;
  var decrementPercent = .00075; //value to increment every loop run .02% is best...
  //any decrement above .1% (.001) is infinite loop here:
  while (start <= 90){
    north.push(start);
    interval *= (1 - decrementPercent);
    start += (interval);
    if (interval <= 0) {break;}
  }
  //push last lat
  north.push(90);
  //create the array of south stuff, then reverse it and join it
  var south = north.slice(1,north.length); //cut off the 0
  //this is dumb, wish I knew array methods better
  for (var i = 0; i < south.length; i++){
    south[i] *= -1;
  }
  south.reverse();
  latitudeArray = south.concat(north);
  console.log(latitudeArray);
  //create lat array:
  while (latStart <= 90) {
    latStart = (latStart + interval);
    latitudeArray.push(latStart.toFixed(4));
  }
  var userPosition = getPosition();
  function getPosition(){
    console.log("Checking navigator");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
      }
      function successFunction(position) {
        console.log("Navigator success");
        returnParcel(position);
        //return position;
      }
      function errorFunction(){
        alert("Geocoder failed");
      }

  }
  function returnParcel(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var latBounds = [];
    var longBounds = [];
    console.log(lat, long);
    //go through and find high and low bounds, push them to lat/long bounds.
    //first value in each array is upper bound, second value is lower
    if (latitudeArray.indexOf(lat) == true) {
      lat += .01;
    }
    if (longitudeArray.indexOf(long) == true) {
      long += .01;
    }
    for (var i = 0; i < latitudeArray.length; i++) {
      if (latitudeArray[i] > lat){
        latBounds.push(latitudeArray[i]);
        latBounds.push(latitudeArray[i-1]);
        break;
      }
      //error if reach last value
      else if (latitudeArray[i] >= 90){
        console.log("cannot find latitude");
      }
    }
    for (var i = 0; i < longitudeArray.length; i++) {
      if (longitudeArray[i] > long){
        longBounds.push(longitudeArray[i]);
        longBounds.push(longitudeArray[i-1]);
        break;
      }
      else if (longitudeArray[i] >= 180){
        console.log("cannot find longitude");
      }
    }
    console.log(longBounds, latBounds);
    //start creating the corners of the rectangle
    var upperLeft = [longBounds[0],latBounds[1]]; //lowest long, highest lat (northwest)
    var upperRight = [longBounds[1],latBounds[1]]; //highest long, highest lat (northeast)
    var bottomRight = [longBounds[1],latBounds[0]]; //highest long, lowest lat (southeast)
    var bottomLeft = [longBounds[0],latBounds[0]]; //lowest long, lowest lat (southwest)

    //I think the reason they require longitude first for GeoJSON Objects
    //is because it is the X axis whereas latitude represents coordinates
    //on the y axis (x,y)
    console.log(upperLeft, upperRight, bottomRight, bottomLeft);
    var polyParcel = '{"type":"Polygon","coordinates": [[['+upperLeft + '], [' + upperRight+ '], [' +  bottomRight+ '], [' +  bottomLeft+'],['+upperLeft + ']]]}'; //must close polygon with upperleft
    var userPoint = '{"type":"Point", "coordinates": ['+long+','+lat+']}';
    $('#demo').text('Parcel: ' + polyParcel);
    $('#demo').append('<br>');
    $('#demo').append('user coord: ' + userPoint);
    $('#demo').append('<br>');
    var parcelObj = '{"type": "FeatureCollection", "features": [{"type": "Feature","properties":{},"geometry": '+polyParcel+'},{"type": "Feature","properties": {},"geometry": '+userPoint+'}]}';
    $('#demo').append('copy the next line:<br>');
    $('#demo').append(parcelObj + '<br>');
    $('#demo').append('<a target="_blank" href="http://geojson.io">And paste it here: GeoJSON</a>');
    console.log(longBounds[0]+','+latBounds[1]+','+longBounds[1]+','+latBounds[0]);

    $.ajax({
      url: 'https://places.cit.api.here.com/places/v1/discover/explore',
      type: 'GET',
      data: {
        bbox: [longBounds[0],latBounds[1],longBounds[1],latBounds[0]],//'42.3736,-71.0751,42.3472,-71.0408',
        app_id: 'AZK6Ofyze1cJzt7DfyoL',
        app_code: 'pMyoWdS4w9j1Oijt0RJC2A'
      },
      success: function (data) {
        alert(JSON.stringify(data));
      }
    });
  }
  //$('#getPosition').click(function() {getPosition();});

});
