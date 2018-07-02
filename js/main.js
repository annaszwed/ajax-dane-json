$("button").click(function getJsonToDive() {
var html='';
    $.ajax({
        dataType: "json",
        url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        success: function (data) {
            for(var key in data) {
            var value = data[key];
                html+='<div>'+key+':'+value+'</div>'
            }
            $("#dane-programisty").append(html);
            
        }
    });
})








































//'use scrict';
//
//
//function setLangLabels() {
//    let langCode = this.getAttribute('lang');
//
//    let elements = document.querySelectorAll("[lang-key]");
//
//    for (let link of elements) { //pobieramy wszystkie linki
//        let langKey = link.getAttribute("lang-key");
//        link.innerHTML = lang[langCode][langKey];
//        console.log(langKey);
//    }
//
//
//
//
//    //
//    //    console.log(langCode);
//    //    console.log(lang["pl"]["portfolio"]);
//
//    //    console.log(lang["pl"]["portfolio]);
//
//    //    console.log(lang["pl"]["portfolio]);
//
//    //    if (langCode == "pl"){
//    //        console.log(langPL);
//    //    } else {
//    //        console.log(langEn);
//    //    }
//}
//
//
//var langPLSwitch = document.getElementById("switch-pl");
//var langEnSwitch = document.getElementById("switch-en");
//
//langPLSwitch.addEventListener("click", setLangLabels);
//langEnSwitch.addEventListener("click", setLangLabels);
//
//
//
//// /////
//
//
//
//function setDefaultLang() {
//
//    var defaultLangCode = document.documentElement.lang;
//    console.log(defaultLangCode);
//
//    let elements = document.querySelectorAll("[lang-key]");
//
//    for (let link of elements) {
//        let language = link.getAttribute("lang-key");
//        link.innerHTML = lang[defaultLangCode][language];
//        console.log(language);
//    }
//}
//
//let bodyElement = document.body;
//document.addEventListener("DOMContentLoaded", setDefaultLang);
//
























