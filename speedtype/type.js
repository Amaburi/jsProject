const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
mistakeTag = document.querySelector(".mistake span"),
timeTag = document.querySelector(".time span b"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span"),
tryAgainBtn = document.querySelector("button");
 
let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes= isTyping = 0;

function randomParagraph(){
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[randIndex].split("").forEach(span=>{
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown",()=> inpField.focus());
    typingText.addEventListener("click",()=> inpField.focus());
}
function initTyping(){
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length -1 && timeLeft > 0){
        if(!isTyping){
            timer = setInterval(initTimer,1000);
            isTyping = true;
        }
        
        if(typedChar == null){
            charIndex--;
            if(characters[charIndex].classList.contains("Incorrect")){
                mistakes--;
            }
            characters[charIndex].classList.remove("Correct","Incorrect");
        }else{
            if(characters[charIndex].innerText === typedChar){
                characters[charIndex].classList.add("Correct");
            }else{
                mistakes++;
               characters[charIndex].classList.add("Incorrect");
            }
            charIndex++;
        }
       characters.forEach(span=> span.classList.remove("active"));
       characters[charIndex].classList.add("active");
       
       let wpm = Math.round((((charIndex - mistakes)/ 5)/(maxTime - timeLeft))* 60);
    //    If wpm value is 0 or empty or its infinite return its value to 0
       wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 :wpm;
       wpmTag.innerText = wpm;
       mistakeTag.innerText = mistakes;
       cpmTag.innerText = charIndex - mistakes;
    }else{
        inpField.value="";
        clearInterval(timer);
    }
}
function initTimer(){
    if(timeLeft > 0 ){
        timeLeft--;
        timeTag.innerText = timeLeft;
    }else{
        clearInterval(timer);
    }
}
function resetGame(){
    randomParagraph();
    timeLeft = maxTime,
    inpField.value = "";
    clearInterval(timer);
    charIndex = mistakes = isTyping = 0;
    timeTag.innerText = timeLeft;
    mistakeTag.innerText = mistakes;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
}
randomParagraph();
inpField.addEventListener("input",initTyping);
tryAgainBtn.addEventListener("click",resetGame);