const plInput = document.getElementById('plName');
const stInput = document.getElementById('stAddress');
const cityInput = document.getElementById('city');
const zipCodeInput = document.getElementById('zipCode');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const userData = {
        plname: plInput.value,
        staddress: stInput.value,
        city: cityInput.value,
        zipcode: zipCodeInput.value
    };

const place = localStorage.getItem("userData") 
let placeData = JSON.parse(place);
if (!placeData) {
    placeData = []
}

placeData.push(userData)
localStorage.setItem("place", JSON.stringify(placeData));
window.location.href = "./map.html"
});
