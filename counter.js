
let count = 0;

const value = document.getElementById('number');
const minus = document.getElementById('btn minus')
const reset = document.getElementById('btn reset')
const plus = document.getElementById('btn plus')
const colorminus = document.querySelector('#number')


minus.addEventListener('click', function(){
    count--;
    value.innerHTML = count;
    colorminus.style.color = 'red';
});

plus.addEventListener('click', function(){
    count++;
    value.innerHTML = count;
    colorminus.style.color = 'green';
});

reset.addEventListener('click', function(){
    count = 0;
    value.innerHTML = count;
    colorminus.style.color = 'whitesmoke'
});


