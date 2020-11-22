let canvas = document.querySelector('.canvas');
let time   = document.querySelector('#time');
let guess   = document.querySelector('#guess');
let score   = document.querySelector('#score');
let total   = document.querySelector('#total');




function makebubble(){
    for(i=0; i<45; i++){
    let bubble = Math.floor(Math.random()*10);
    canvas.innerHTML +=  `<div class="bubble">${bubble}</div>`
}
}
makebubble();

let start = 60;

setInterval(function(){
    if(start>0){
        start--;
        time.innerHTML = `${start}s`;
        if(start<10){
            time.style.color = 'red';
        }
    }
    else{
        canvas.innerHTML = `<div id="gmov"><h1>GAME OVER</h1><h2>Your Score Was : ${points}</h2></div>`
    }
},1000)

function guessnumber(){
    let random = Math.floor(Math.random()*10);
    guess.innerHTML = random;
}

guessnumber();

let points= 0;

canvas.addEventListener('click',function(event){
    let clicked = event.target.textContent;
    if(clicked == guess.textContent){
        points += 10;
        score.innerHTML = points;
        guessnumber();
        canvas.innerHTML = '';
        makebubble();
    }
});

let animate = gsap.timeline();

animate.from('.game',{
    y : -900,
    duration : 1,
})

