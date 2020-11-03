const color_arr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const button = document.querySelector('button');
const body = document.querySelector('body');
const span = document.querySelector('span');

button.addEventListener('click', function(){
    let color = '#';
    for(let i=0;i<6;i++){
        let val = color_arr[parseInt(Math.random()*color_arr.length)];
        color = color + val;
    }
    body.style.backgroundColor = color;
    span.innerText = color;
    console.log(color);
})