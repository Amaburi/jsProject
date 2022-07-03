const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input");

inputField.addEventListener("keyup", e=>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});
function requestApi(city){
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={d8669c0eda6c0aeb8929d354e4125e89}`;
    fetch(api).then(response => response.json()).then(result=> weatherDetails(result));
}
function weatherDetails(info){
    console.log(info);
}