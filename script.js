// INITIAL DATA
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3
};
let player = '';
let warning = '';
let playing = false;



// EVENTS
document.querySelector('.reset').addEventListener('click', reset);


// FUNCTIONS
function reset() {
    warning = '';

    let random = Math.floor(Math.random() * 2);
    player = (random === 0) ? 'x' : 'o';

    for(let i in square) {
        square[i] = '';
    }
}