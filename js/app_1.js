///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'jwhite27.96341b12'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiandoaXRlMjciLCJhIjoiVHJqLTRwRSJ9.aonnRBx6vUGVdeKgg1PTBA'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFileToAdd = 'data/bike_routes.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map);

featureLayer.on('ready',function(){
  this.setstyle({
    'color':'#ec008c'
    'weight':4,
    'opacity':.7
  })
  map.fitbounds(feature:ayer/getBounds());
});

featureLayer.on('ready',function(){
  this.eachLayer(function(layer){
    layer.bindPopup('Hi, Im the bike route called ' + layer.feature.properties.name)
  });
});
