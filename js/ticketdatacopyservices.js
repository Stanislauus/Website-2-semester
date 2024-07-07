document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var departureDate = urlParams.get('departure_date');
    var returnDate = urlParams.get('return_date');
    var departurePlace = urlParams.get('departure_place');
    var arrivalPlace = urlParams.get('arrival_place');
    var passengerCount = urlParams.get('passenger_count');
    var personSurname = urlParams.get('person_surname');
    var personNamepatronymic = urlParams.get('person_namepatronymic');
    var personEmail = urlParams.get('person_email')


    document.querySelector('#submitButton').addEventListener('click', function() {

        if (!personSurname || !personNamepatronymic || !personEmail) {
            alert("Вернитесь на главную страницу!");
            return;
        }

        var url = "sixth.html?departure_date=" + departureDate +
        "&return_date=" + returnDate +
        "&departure_place=" + departurePlace +
        "&arrival_place=" + arrivalPlace +
        "&passenger_count=" + passengerCount +
        "&person_surname=" + personSurname +
        "&person_namepatronymic=" + personNamepatronymic +
        "&person_email=   " + personEmail;

    // Переход на следующую страницу
    window.location.href = url;
    });
});