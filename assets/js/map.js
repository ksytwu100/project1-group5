document.getElementById('backButton').addEventListener('click', function() {
 window.location.href = "./index.html"
});

document.getElementById("city").textContent = JSON.parse(localStorage.getItem("place"))[0].city;