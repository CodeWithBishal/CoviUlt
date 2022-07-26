const list = document.getElementById("json_data");

//API REQUEST
function faqVaccineAPI() {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/assets/json/faq-vaccine.json", false); //synchronous request so that the below javascript file(accordion.js) can detect the elements

    xhrReq.onload = () => {

        var jsonData = JSON.parse(xhrReq.responseText);
        let faqData = jsonData["faq"];
        for (let i = 0; i < faqData.length; i++) {
            var htmlData = '<li><div class="accordion-item"><button id="accordion-button-' + [i] + '" aria-expanded="false"><span class="accordion-title">' + faqData[i]['q'] + '</span></button><div class="accordion-content"><p>' + faqData[i]['a'] + '</p></div></div></li>';
            list.innerHTML += htmlData;
        }
    };
    xhrReq.send();
}

function faqcovidAPI() {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/assets/json/faq-covid.json", false); //synchronous request so that the below javascript file(accordion.js) can detect the elements

    xhrReq.onload = () => {

        var jsonData = JSON.parse(xhrReq.responseText);
        let faqData = jsonData["faq"];
        for (let i = 0; i < faqData.length; i++) {
            var htmlData = '<li><div class="accordion-item"><button id="accordion-button-' + [i] + '" aria-expanded="false"><span class="accordion-title">' + faqData[i]['q'] + '</span></button><div class="accordion-content"><p>' + faqData[i]['a'] + '</p></div></div></li>';
            list.innerHTML += htmlData;
        }
    };
    xhrReq.send();
}

function faqCovishieldAPIS() {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/assets/json/faq-covishield.json", false); //synchronous request so that the below javascript file(accordion.js) can detect the elements

    xhrReq.onload = () => {

        var jsonData = JSON.parse(xhrReq.responseText);
        let faqData = jsonData["faq"];
        for (let i = 0; i < faqData.length; i++) {
            var htmlData = '<li><div class="accordion-item"><button id="accordion-button-' + [i] + '" aria-expanded="false"><span class="accordion-title">' + faqData[i]['q'] + '</span></button><div class="accordion-content"><p>' + faqData[i]['a'] + '</p></div></div></li>';
            list.innerHTML += htmlData;
        }
    };
    xhrReq.send();
}

function faqVaccinePregnantWomenAPI() {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/assets/json/faq-pregnant_women.json", false); //synchronous request so that the below javascript file(accordion.js) can detect the elements

    xhrReq.onload = () => {

        var jsonData = JSON.parse(xhrReq.responseText);
        let faqData = jsonData["faq"];
        for (let i = 0; i < faqData.length; i++) {
            var htmlData = '<li><div class="accordion-item"><button id="accordion-button-' + [i] + '" aria-expanded="false"><span class="accordion-title">' + faqData[i]['q'] + '</span></button><div class="accordion-content"><p>' + faqData[i]['a'] + '</p></div></div></li>';
            list.innerHTML += htmlData;
        }
    };
    xhrReq.send();
}


function faqCovaxinVaccineAPI() {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/assets/json/faq-covaxin.json", false); //synchronous request so that the below javascript file(accordion.js) can detect the elements

    xhrReq.onload = () => {

        var jsonData = JSON.parse(xhrReq.responseText);
        let faqData = jsonData["faq"];
        for (let i = 0; i < faqData.length; i++) {
            var htmlData = '<li><div class="accordion-item"><button id="accordion-button-' + [i] + '" aria-expanded="false"><span class="accordion-title">' + faqData[i]['q'] + '</span></button><div class="accordion-content"><p>' + faqData[i]['a'] + '</p></div></div></li>';
            list.innerHTML += htmlData;
        }
    };
    xhrReq.send();
}


function faqCovovaxVaccineAPI() {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/assets/json/faq-covovax.json", false); //synchronous request so that the below javascript file(accordion.js) can detect the elements

    xhrReq.onload = () => {

        var jsonData = JSON.parse(xhrReq.responseText);
        let faqData = jsonData["faq"];
        for (let i = 0; i < faqData.length; i++) {
            var htmlData = '<li><div class="accordion-item"><button id="accordion-button-' + [i] + '" aria-expanded="false"><span class="accordion-title">' + faqData[i]['q'] + '</span></button><div class="accordion-content"><p>' + faqData[i]['a'] + '</p></div></div></li>';
            list.innerHTML += htmlData;
        }
    };
    xhrReq.send();
}