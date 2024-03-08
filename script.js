

function alertFunction() {
    alert('you did it');
}
function getSize() {
    
    while (true){
        let boardSize = prompt('Choose size length:', 16);
        

        if (parseInt(boardSize) > 0 && parseInt(boardSize) <= 100) {
            return boardSize
        }
        else {
            alert('Please enter a number (Max:100)')
        }
    }
}

function makeRows(num) {
    for (let i = 0; i < num; i++){
        let row = document.createElement('div');
        row.setAttribute('class', `row`);
        row.setAttribute('id', `row${i}`);
        board.appendChild(row)
    }
}

function fillRows (num) {
    let row = document.querySelectorAll('.row')
    row.forEach((item) => {
        console.log(item);
        for (let i = 0; i < num; i++) {
            let col = document.createElement('div');
            col.setAttribute('class', 'col');
            col.setAttribute('id', `col${i}`); 
            col.onmouseover = () => col.setAttribute('style', 'background: black;');
            item.appendChild(col);
        }
    })   
}





const board = document.querySelector('.board') 

const reset = document.querySelector('#reset')
let length;
reset.onclick = () => {
    board.innerHTML = '';
    length = getSize();
    console.log(length);
    makeRows(length);
    fillRows(length);
}