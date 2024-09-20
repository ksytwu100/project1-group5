const plInput = document.getElementById('plName');
const stInput = document.getElementById('stAddess');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const zipCodeInput = document.getElementById('zipCode');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('submit', function(event) {
    event.preventDefault();

    const userData = {
        plname: plNameInput.value,
        staddress: stAddressInput.value,
        city: cityInput.value,
        state: stateInput.value,
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
