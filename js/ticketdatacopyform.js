document.addEventListener('DOMContentLoaded', function() {

    var urlParams = new URLSearchParams(window.location.search);
    var departureDate = urlParams.get('departure_date');
    var returnDate = urlParams.get('return_date');
    var departurePlace = urlParams.get('departure_place');
    var arrivalPlace = urlParams.get('arrival_place');
    var passengerCount = urlParams.get('passenger_count');
    

        // Обработчик для кнопки "ДАЛЕЕ"
        document.querySelector('#submitButton').addEventListener('click', function() {
            
            // Сбор выбранных значений
            var personSurname = document.querySelector('#personSurname').value;
            var personNamepatronymic = document.querySelector('#personNamepatronymic').value;
            var personBirth = document.querySelector('#personBirth').value;
            var personSex = document.querySelector('#personSex').value;
            var personLife = document.querySelector('#personLife').value;
            var personDocument = document.querySelector('#personDocument').value;
            var personDocumentNumber = document.querySelector('#personDocumentNumber').value;
            var personDocumentDate = document.querySelector('#personDocumentDate').value;
            var personTell = document.querySelector('#personTell').value; 
            var personEmail = document.querySelector('#personEmail').value;
            var checkbox = document.querySelector('#checkbox').checked;

            if (!personSurname || !personNamepatronymic || !personBirth || !personSex || !personLife || !personDocument || !personDocumentNumber || !personDocumentDate || !personTell || !personEmail || !checkbox) {
                alert("Заполните все данные!");
                return;
            }

            // Формируем URL для перенаправления с данными о выбранном билете
            var url = "fifth.html?departure_date=" + departureDate +
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
    



