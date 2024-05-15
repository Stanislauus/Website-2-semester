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

    // Функция для перенаправления на другой сайт с сохранением данных о выбранном билете
    function redirectToOtherSite(ticketNumber) {
        // Получаем данные о выбранном билете из XML
        loadXMLDoc("tickets.xml", function(xmlDoc) {
            var ticket = xmlDoc.getElementsByTagName("ticket" + ticketNumber)[0];
            var currentPrice = ticket.getElementsByTagName("current_price")[0].textContent;
            var departureArrival = ticket.getElementsByTagName("departure_arrival")[0].textContent;
            var date = ticket.getElementsByTagName("date")[0].textContent;
            var time = ticket.getElementsByTagName("time")[0].textContent;

            // Формируем URL для перенаправления с данными о выбранном билете
            var url = "fourth.html?current_price=" + currentPrice +
                      "&departure_arrival=" + departureArrival +
                      "&date=" + date +
                      "&time=" + time;

            // Перенаправляем пользователя на другой сайт
            window.location.href = url;
        });
    }

    // Обработчики для каждого блока билета
    document.querySelectorAll('.block').forEach(function(block) {
        block.addEventListener('click', function() {
            // Получаем номер выбранного билета из атрибута data-ticket-number
            var ticketNumber = parseInt(this.getAttribute('data-ticket-number'));
            // Перенаправляем пользователя на другой сайт с данными о выбранном билете
            redirectToOtherSite(ticketNumber);
        });
    });
});
