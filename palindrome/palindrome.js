const txtInput = document.querySelector(".input input"),
checkBtn = document.querySelector(".input button"),
infoTxt = document.querySelector(".info-txt");
let filterInput; 
checkBtn.addEventListener("click",()=>{
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a Palindrome.`
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a Palindrome.`
})
txtInput.addEventListener("keyup",()=>{
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
})