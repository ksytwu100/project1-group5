// var coordData = localStorage.getItem("coord");
// var lat = coordData.split(" ")[0];
// var lon = coordData.split(" ")[1];

// let mapOptions = {
//     center: [lat, lon],
//     zoom: 10
// }

// let map = new L.map('map', mapOptions);

// let layer = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
// map.addLayer(layer);

function searchAddress () {
    var cityName = cityCaseClean($("#cityName")[0].value.trim());
    var streetNumber = $("#placeAddress").replace(/[^0-9]/g, '');
    var streetName = $("#placeAddress").replace(/\d+/g, '');
    var state = $("#placeState");
    var zipCode = $("#placeZip");

    var requestURL = "https://nominatim.openstreetmap.org/ui/search.html?q" + streetNumber + "+" + streetName + "+" + cityName + "%2C" + state + "+" + zipCode;

    fetch(requestURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {

                const lat = data.coord.lat;
                const lon = data.coord.lon;

                var latLon = lat.toString() + " " + lon.toString();

                L.marker([latLon]).addTo(map);

            })
        }
    })
}

document.getElementById('backButton').addEventListener('click', function() {
 window.location.href = "./index.html"
});