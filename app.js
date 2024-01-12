let color = 'black'
document.addEventListener('DOMContentLoaded', ()=>{
    createBoard(32)

    let btn = document.querySelector('.select')
    btn.addEventListener('click', () =>{
        let size = getSize();
        createBoard(size);
    })
})


const createBoard = (size) => {
const board = document.querySelector('.board')

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows = `repeat(${size}, 1fr)`

let numDiv = size * size


for(i = 0; i < numDiv; i++){
    let div = document.createElement('div')
    div.setAttribute('class', 'innerDiv')
    div.addEventListener('mouseover', colorDiv)
    board.insertAdjacentElement('beforeend', div)
}

}

const getSize = () =>{
    let message = document.querySelector('.message');
    let inputSize = prompt('choose a size');

    
        if(inputSize == ''){
        message.textContent = 'Enter a number';
        }
            else if(inputSize < 0 || inputSize > 100){
        message.textContent = "Number must be between 0 and 100"
        }
        else{
            message.textContent = 'Now you can play'
            return inputSize
        }
    
    }

    function setColor (colorChoice){
        color = colorChoice
    }
    
    function colorDiv(){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = 'black'
        }
    }

 function restBoard(){
     let divs = document.querySelectorAll('.innerDiv')
    //  console.log('1', divs)
    divs.forEach((div) => {
        // console.log('2', div)
        div.style.backgroundColor = 'white';
    })
 }