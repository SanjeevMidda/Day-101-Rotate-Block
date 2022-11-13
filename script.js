//click block moves

let block = document.querySelector('.block');
let press = document.querySelector('h3');

let rotation = 30;

press.addEventListener('click', blockMove);
press.addEventListener('mousedown', color)


function blockMove(){

    block.style.transform = `rotate(${rotation}deg)`;

    rotation += 30;
}

function color(){
    block.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
}


function randomColor(){
    return Math.floor(Math.random()*255);
    
}