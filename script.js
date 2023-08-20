console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
// let reset = document.getElementById("reset");

let turn = "x";
let isgameover = false;

//Function to change the Turn
const changeturn= ()=>{
    return turn === "x"?"0":"x";
}


//Function to check for a Win
const checkWin = ()=>{
    const boxtext = document.getElementsByClassName("boxtext");
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is Won ";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
            gameover.play();
        }
    })
}

//Game Logic
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if((boxtext.innerText === '') && (!isgameover)){
            boxtext.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            
            
        }
    })
 })

//  music.play(); // for background Music

 //eventlistener for reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = '';

    });

    isgameover = false;
    turn = "x";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    gameover.pause();

})
