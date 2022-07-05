const editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter = document.querySelector(".counter"),
button = document.querySelector("button");

editableInput.onkeyup = (e)=>{
    let element = e.target;
    checkInput(element);
}

editableInput.onkeypress= (e)=>{
    let element = e.target;
    placeholder.style.display = "none";
    checkInput(element);
}
function checkInput(){
    let element = e.target;
    let maxlength = 1000;
    let currentLength = element.innerText.length;
    let textTag = element.innerHTML;

    if(currentLength <= 0){
        placeholder.style.display = "block";
        counter.style.display = "none";
        button.classList.remove("active");
    }else{
        counter.style.display = "block";
        placeholder.style.display = "none";
        button.classList.add("active");
    }
    counter.innerText = maxlength - currentLength;
    
    if(currentLength> maxlength){
        let overText = element.innerText.substr(maxlength);
        overText = `<span class="highlight">${overText}</span>`;
        textTag = element.innerText.substr(0,maxlength)+overText;

        readonlyInput.style.zIndex = "1";
        counter.style.color = "#e0245e";
        button.classList.remove("active");
    }else{
        readonlyInput.style.zIndex = "-1";
        counter.style.color = "#333";
    }
    readonlyInput.innerHTML = textTag;
}