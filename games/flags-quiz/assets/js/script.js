document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let displayFlag;
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else if (this.getAttribute("data-type") === "finish") {
                finishGame();
            } else {
                let gameType = this.getAttribute("data-type"); 
                    runGame(gameType);
                }
            });
        }
    
        document.getElementById("answer-box").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        });
    
        runGame("flag");    
});
    
    modal();

    function runGame(gameType) {

        document.getElementById("answer-box").value = "";
        document.getElementById("answer-box").focus();         
    
        if (gameType === "flag") {
            displayFlagImage();
        } else if (gameType === "rules") {
            modal();
        } else {
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. Aborting!`;
        }
    }

    function displayFlagImage() {

        let flagImg = [];
        flagImg[0] = 'assets/images/flags/canada-flag.jpg';
        flagImg[1] = 'assets/images/flags/germany-flag.jpg';
        flagImg[2] = 'assets/images/flags/ireland-flag.jpg';
        flagImg[3] = 'assets/images/flags/japan-flag.jpg';
        flagImg[4] = 'assets/images/flags/morocco-flag.jpg';
        flagImg[5] = 'assets/images/flags/spain-flag.jpg';
        flagImg[6] = 'assets/images/flags/france-flag.jpg';
        flagImg[7] = 'assets/images/flags/ukraine-flag.jpg';
        flagImg[8] = 'assets/images/flags/brazil-flag.jpg';
        flagImg[9] = 'assets/images/flags/australia-flag.jpg';
        flagImg[10] = 'assets/images/flags/croatia-flag.jpg';
        flagImg[11] = 'assets/images/flags/cambodia-flag.jpg';
        flagImg[12] = 'assets/images/flags/argentina-flag.jpg';
        flagImg[13] = 'assets/images/flags/georgia-flag.jpg';
        flagImg[14] = 'assets/images/flags/india-flag.jpg';
        
        displayFlag = Math.floor(Math.random() * flagImg.length);
        document.getElementById("image").innerHTML = '<img src="'+flagImg[displayFlag]+'" class="img" alt="a flag">';
        
    }

    function checkAnswer() {
        let userAnswer = document.getElementById("answer-box").value.toLowerCase().trim();
        let correctAnswer = rightAnswer().toLowerCase();
        let isCorrect = userAnswer === correctAnswer;
   
    if (isCorrect) {
        alert("Well done! You got it right!");
        incrementScore();
    } else if (userAnswer =="") {
        alert("Please, type the country you think this flag belongs to.");
        return false;
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct country was ${correctAnswer.toUpperCase()}!`);
        incrementWrongAnswer();
    }
    runGame("flag");
    }
    //to check correct answers  
    function rightAnswer() {        
        if (displayFlag === 0) {
             return "canada";
        } else if (displayFlag === 1) {
            return "germany";
        } else if (displayFlag === 2) {
            return "ireland";
        } else if (displayFlag === 3) {
            return "japan";
        } else if (displayFlag === 4) {
            return "morocco";
        } else if (displayFlag === 5) {
            return "spain";
        } else if (displayFlag === 6) {
            return "france";
        } else if (displayFlag === 7) {
            return "ukraine";
        } else if (displayFlag === 8) {
            return "brazil";
        } else if (displayFlag === 9) {
            return "australia";
        } else if (displayFlag === 10) {
            return "croatia";
        } else if (displayFlag === 11) {
            return "cambodia";
        } else if (displayFlag === 12) {
            return "argentina";
        } else if (displayFlag === 13) {
            return "georgia";
        } else if (displayFlag === 14) {
            return "india";
        } else {
            alert("Sorry, it's a wrong country");
        }
    }

    //to display correct answers score       
    function incrementScore() {
        let oldScore = parseInt(document.getElementById("correct").innerText);
        document.getElementById("correct").innerText = ++oldScore;       
    }
    //to display wrong answers score 
    function incrementWrongAnswer() {
        let oldScore = parseInt(document.getElementById("incorrect").innerText);
        document.getElementById("incorrect").innerText = ++oldScore;
    }

//to display a pop-up message
function modal() {
    let modal = document.getElementById("openModal");
    let btn = document.getElementById("modal");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    };
    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
    }
    }; 
}
//to finish the game and reset the score
function finishGame() {
    
    let score = document.getElementById("correct").innerText;
    let modal = document.getElementById("finish-modal");
    
    modal.style.display = "block";
    document.getElementById("final-score").innerText = score;
    resetScore();

    let span = document.getElementsByClassName("close")[1];
    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
    }
};
}
    

//to reset the score for a new game
function resetScore() {
    document.getElementById("correct").innerText = 0;
    document.getElementById("incorrect").innerText = 0;
}