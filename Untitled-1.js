
function showInfo(planetName, description) {
    document.getElementById('planetName').innerText = planetName;
    document.getElementById('planetDescription').innerText = description;
    document.querySelector('.planet-info').style.display = 'block';
}
