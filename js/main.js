var newElem = document.createElement("div");
newElem.innerHTML = " ";
document.body.appendChild(newElem);
newElem.className += ("dane-programisty");

$("button").click(function getJsonToDive() {
    var html = '';
    $.ajax({
        dataType: "json",
        url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        success: function (data) {
            for (var key in data) {
                var value = data[key];
                html += '<div>' + key + ':' + value + '</div>'
            }
            $("div").append(html);
        }
    });
})
