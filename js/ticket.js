document.addEventListener('DOMContentLoaded', function() {
    // Функция для загрузки XML-файла
    function loadXMLDoc(filename, callback) {
        var xhttp;
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseXML);
            }
        };
        xhttp.open("GET", filename, true);
        xhttp.send();
    } 

    // Функция для получения данных из XML
    function getDataFromXML(callback) {
        loadXMLDoc("ticket.xml", function(xmlDoc) {
            var data = {};
            data.departurePlaces = Array.from(xmlDoc.querySelectorAll('departure > departure_place')).map(node => node.textContent);
            data.arrivalPlaces = Array.from(xmlDoc.querySelectorAll('arrival > arrival_place')).map(node => node.textContent);
            data.passengerCounts = Array.from(xmlDoc.querySelectorAll('passengers > count')).map(node => node.textContent);
            callback(data);
        });
    }

    // Обработчик для кнопки "ДАЛЕЕ"
    document.querySelector('#submitButton').addEventListener('click', function() {
        getDataFromXML(function(data) {


            // Сбор выбранных значений
            var departureDate = document.querySelector('#departureDate').value;
            var returnDate = document.querySelector('#returnDate').value;
            var departurePlace = document.querySelector('#departurePlace').value;
            var arrivalPlace = document.querySelector('#arrivalPlace').value;
            var passengerCount = document.querySelector('#passengerCount').value;

            if (!departureDate || !returnDate || !departurePlace || !arrivalPlace || !passengerCount) {
                alert("Заполните все данные!");
                return;
            }
            
            // Формируем URL для перенаправления с данными о выбранных значениях
            var url = "second.html?departure_date=" + departureDate +
                      "&return_date=" + returnDate +
                      "&departure_place=" + departurePlace +
                      "&arrival_place=" + arrivalPlace +
                      "&passenger_count=" + passengerCount;
            
            window.location.href = url;
        });
    });
});
