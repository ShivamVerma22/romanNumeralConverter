var txtInput = document.querySelector(".input-text");
var btnTranslate = document.querySelector(".btn-translate");
var outputBoard = document.querySelector(".output-board");
var serverURL = "https://api.funtranslations.com/translate/roman-numerals.json"

function displayError(error){
    console.log("Error occured:"+error)
    alert("Error: You might have crossed the limit as this is a free API or It might be Internal server error, Try again after some time")
}

function setURLString(text){
    return serverURL + "?" + "text=" + text
}

function checkInput(input){
    return !isNaN(input);
}

function translateText(){
    var inputtedText = txtInput.value;
    if(checkInput(inputtedText)){
        fetch(setURLString(inputtedText))
        .then(response => response.json())
        .then(output => {
            var translatedText = output.contents.translated;
            outputBoard.innerHTML = translatedText;
        })
        .catch(displayError)
    } else{
        alert("Input error: Input should be only numbers!!")
    }
}

btnTranslate.addEventListener("click", translateText)