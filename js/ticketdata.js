document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var departureDate = urlParams.get('departure_date');
    var returnDate = urlParams.get('return_date');
    var departurePlace = urlParams.get('departure_place');
    var arrivalPlace = urlParams.get('arrival_place');
    var passengerCount = urlParams.get('passenger_count');

    // Проверяем, что элементы существуют на странице перед их обновлением
    var block1 = document.querySelector('#block1 p:last-child');
    var block2 = document.querySelector('#block2 p:last-child');
    var block3 = document.querySelector('#block3 p:last-child');
    var block4 = document.querySelector('#block4 p:last-child');
    var block5 = document.querySelector('#block5 p:last-child');

    if (block1) block1.textContent = departurePlace;
    if (block2) block2.textContent = arrivalPlace;
    if (block3) block3.textContent = passengerCount;
    if (block4) block4.textContent = departureDate;
    if (block5) block5.textContent = returnDate;

    document.querySelectorAll('.price-block').forEach(function(element) { 
        element.addEventListener('click', function() {
        var url = "third.html?departure_date=" + departureDate +
                 "&departure_place=" + departurePlace +
                 "&arrival_place=" + arrivalPlace +
                 "&return_date=" + returnDate +
                 "&passenger_count=" + passengerCount;
        window.location.href = url;
        });
    });
});