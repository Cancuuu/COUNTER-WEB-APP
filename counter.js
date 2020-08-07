

let count = 0;

const value = document.getElementById('number');
const minus = document.getElementById('btn minus');
const reset = document.getElementById('btn reset');
const plus = document.getElementById('btn plus');
const colorminus = document.querySelector('#number');
const random = document.getElementById('random')


function main(){

    random.addEventListener('click', function(){
    count = 0;
    Rnumber = Math.floor((Math.random()*200)-100);
    value.innerHTML = Rnumber;
});
    minus.addEventListener('click', function(){
    count--;
    value.innerHTML = count;
    
});

    plus.addEventListener('click', function(){
    count++;
    value.innerHTML = count;
    
});

    reset.addEventListener('click', function(){
    count = 0;
    value.innerHTML = count;    
    
});
};



main();


