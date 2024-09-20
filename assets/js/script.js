
const plInput = document.getElementById('plName');
const stInput = document.getElementById('stAddress');
const cityInput = document.getElementById('city');
const zipCodeInput = document.getElementById('zipCode');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  if(plInput.value===''|| stInput.value===''|| cityInput.value===''|| zipCodeInput==='')  {
    document.getElementById('id01').style.display='block';
    return;
  }
 // Create user object 
const userData = {
  plname: plInput.value,
  staddress: stInput.value,
  city: cityInput.value,
  zipcode: zipCodeInput 
}; 
const place = localStorage.getItem("place") 
let placeData = JSON.parse(place);
if (!placeData) {
  placeData = []
}
placeData.push(userData)
 // Set new submisstion to local storage
localStorage.setItem("place",JSON.stringify(placeData));
window.location.href = "./index.html"
});



