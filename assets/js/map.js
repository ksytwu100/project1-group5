let mapOptions = {
    //center: [coordinates[0],coordinates[1]],
    center: [37.774, -122.431],
    zoom: 10
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

//TO-DO geo lookup from address 

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
