let mapOptions = {
    center: [37.774, -122.431],
    zoom: 10
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

L.marker([37.774, -122.431]).addTo(map);

// var map = L.map('map', {
//     center: [37.775, 122.429],
//     zoom: 13
// });

// L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// ).addTo(map);