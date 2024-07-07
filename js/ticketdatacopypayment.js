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
        var cardNumber = document.querySelector('#cardNumber').value;
        var cardPerson = document.querySelector('#cardPerson').value;
        var cardMonth = document.querySelector('#cardMonth').value;
        var cardYear = document.querySelector('#cardYear').value;
        var cardCode = document.querySelector('#cardCode').value;

        if (!cardNumber || !cardPerson || !cardMonth || !cardYear || !cardCode) {
            alert("Заполните все данные!")

        } else {
            var alertMessage = `Здравствуйте, ${personSurname} ${personNamepatronymic}. Данные о билете и дальнейшая оплата отправлены на адрес электронной почты ${personEmail}`;
            alert(alertMessage);
        }
    });
});