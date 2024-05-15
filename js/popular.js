document.addEventListener('DOMContentLoaded', function() {
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
    
    function fillFormWhithTicketData(cityNumber) {
        loadXMLDoc("popular.xml", function(xmlDoc){
            var city = xmlDoc.getElementsByTagName("city" + cityNumber)[0];
            var arrivalPlace = city.getElementsByTagName("arrival_place")[0].textContent;
            var departurePlace = city.getElementsByTagName("departure_place")[0].textContent;

            // Заполняем форму данными о выбранном билете
            document.getElementById('arrivalPlace').value = arrivalPlace;
            document.getElementById('departurePlace').value = departurePlace;

            //Скроллим к форме
            document.querySelector('.adaptive').scrollIntoView({
                behavior: 'smooth'
            });

        });

    }

    document.querySelectorAll('.photo').forEach(function(photo) {
        photo.addEventListener('click', function() {
            var cityNumber = parseInt(this.getAttribute('data-city-number'));
            // Заполняем форму данными о выбранном билете
            fillFormWhithTicketData(cityNumber);
        });
    });
});