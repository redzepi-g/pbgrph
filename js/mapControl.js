$(document).ready(function(){

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    mymap.scrollWheelZoom.disable();
    

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGV4dGVyciIsImEiOiJjamg1NG01MGQxNDEzMnFxbDV4emR5aTQ1In0._fRKp1tyZEdULwUqTFtxqA'
}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'img/mapIcon.png',
    iconSize: [25, 25],
    iconAnchor: [15, 15],
    popupAnchor: [-3, -76],
});
L.marker([51.5, -0.09], {icon: myIcon}).addTo(mymap);
});