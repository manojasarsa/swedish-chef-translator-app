var btnTranslate = document.querySelector("#btn-translate");

var inputText = document.querySelector("#txt-Input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {

    console.log("error occurred", error);
    alert("Something wrong with the server! Try again after some time")
}

function clickHandler() {

    var inputValue = inputText.value;  // taking input

    fetch(getTranslationURL(inputValue))
        .then(response => response.json())
        .then(json => {
            
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)