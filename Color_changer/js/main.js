const colors = ['red','blue','yellow','orange','green'];

const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', function(){
    const val = parseInt(Math.random()*colors.length);
    console.log(val);
    body.style.backgroundColor = colors[val];
})