const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span"),
typingInput = document.querySelector(".typing-input"),
wrongLetters = document.querySelector(".wrong-letter span"),
guess = document.querySelector(".guess-left span");

let word, incorrects = [], corrects = [],maxGuesses;

function randomWord(){
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    maxGuesses = 6; corrects = []; incorrects = [];
    console.log(word);

    hint.innerText = ranObj.hint;
    guess.innerText = maxGuesses;
    wrongLetters.innerText = incorrects;

    let html = "";
    for (let i = 0; i < word.length; i++){
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}

randomWord();

function initGame(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`) && !corrects.includes(key)){
        console.log(key);

        if(word.includes(key)){
            for (let i = 0; i < word.length; i++) {
                if(word[i] === key){
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        }else{
            maxGuesses--;
           incorrects.push(`${key}`);
        }
        guess.innerText = maxGuesses;
        wrongLetters.innerText =incorrects;
    }
    typingInput.value = "";
    
   
    setTimeout(()=>{
        if(corrects.length){
            alert(`Congratsssssssssss you've found all the letters ${word.toUpperCase()}!!!`);
            randomWord();
        }else if(maxGuesses < 1){
            alert("Gameeeeeeee Over!!!!!");
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    });
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
