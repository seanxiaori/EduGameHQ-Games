/* TO DO  - VERIFY CODE LINE #'s in NOTES */

/* const for x/o class for ease of use to target 
cellEl is how we'll grab all 9 cells in HTML */
const X_CLASS = 'x';
const O_CLASS = 'o';
const cellEl = document.querySelectorAll('[xOcell]');
const board = document.getElementById('board');
const restartButton = document.getElementById('restartButton');
const WINNING_COMBINATIONS = [
/* Listed out in array 0 base */ 
/* wins = left to right, top to bottom, diagonals */    
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector('[winning-text]');
let oTurn = false; 
let xTurn = true;
startGame(); /* initiator */

/* START GAME FUNCTION - touch that keyboard lightly */
function startGame () {
    cellEl.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    })
    hoverClass ()
    winningMessageElement.classList.remove('show');
    /* removes dark screen on win to play again */
}
/* End START GAME FUNCTION - ok now go Godzilla mode */

restartButton.addEventListener('click', startGame);
/* CTO - The event listener will only work ONE TIME with 
the {once: true} argument. This allows you to make it so
that the user can click on the cell and it will only fire 
one time! */ 

function handleClick (evt) { 
    const cell = evt.target;
    const currentClass = oTurn ? O_CLASS : X_CLASS;
    newClick (cell, currentClass);
/*  Now we've got a class turn, assigned it
to currentClass, and have targeted the cell of eListen
click. Now we will want to pass this data to determine
how to mark the cell with X or O (based on currentClass
which we'll get from ternary operator saying if it's X
turn then return that data, otherwise it's O turn. */
   
/* ---------------WINNING LOGIC FUNCTIONS--------------- */ 

    if (chickenDinner(currentClass)) {
        endGame(false);
    } else if (isTie()) {
        endGame(true);
    } else {
        swapTurns();
        hoverClass();
    }
}
function endGame(tie) {
    if (tie) {
    winningMessageTextElement.innerText = "It's a TIE. Cat Game.";
    } else {
    winningMessageTextElement.innerText = `${oTurn ? "O's" : "X's"} Win!`;
    }
    winningMessageElement.classList.add('show');
}

function isTie() {
    return [...cellEl].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
    })
}
/* ABOVE returns a Boolean Value of T/F if every cell 
contains an X or a O. If so this means we have a tie... 
and the [...cellEl] means we destructure the cell 
elements into an array so we can use methods */ 

function newClick(cell, currentClass) {
    cell.classList.add(currentClass);
}
/*Link to the classList.add () that accesses DOM
to pass the informatino of the click (cell and class of
turn) to lines 12-20 depending on which cell. This then 
displays to user that data on the HTML Browser dynamically
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList   */

function swapTurns () {
    oTurn = !oTurn;
}
/* this easy function just inverts the ternary operator
output from line 23. This step swaps turns and will
tell DOM to... TO DO */

function hoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (oTurn) {
        board.classList.add(O_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}
/* method this will ensure all classes are cleared from the 
HTML board on hover and only show O if oTurn is true... 
otherwise X for xTurn */

/*method will check to see if at least 1 array combo of 3
is equal to any of the cells... then the < .every> method
will return a Boolean value of T/F if all elements are the
same class (X or O) */
function chickenDinner (currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellEl[index].classList.contains(currentClass)
        })
    
    })
}


/*----- constants -----*/

// 1.) Holding the player's choice of X/O each time
// 2.) winning number in a line
// 3.) x/o class for storing string that can be used

/*----- app's state (variables) -----*/

// 1.) player choices (AI/player 2 as well)
// 2.) Wins vs Losses (for best of 3 maybe?)
// 3.) Version of background maybe if you wanted theme
// 4.) X turn vs O turn

/*----- cached element references -----*/

// 1.) current class/id bring targeted (who's turn)
// 2.) 
// 3.) 

/*----- event listeners -----*/


// 1.) listen for click to the cell
// 2.) hover pseudo-class listen to show symbol for used cells
// 3.) event listener on button for new game
// 3.) event listener on button for play again

/*----- functions -----*/

// 1.) event listeners for clicks into cells
// 2.) logic to determine which turn
// 3.) check to see if win or tie (Cat's Game)
// 4.) switching players
// 5.) storing data and speaking with HTML for used cell
// 6.) dynamically pass this state data for CSS changes