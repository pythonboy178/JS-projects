const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.getElementById('pre-msg');
const notification = document.querySelector('.hide')

button.addEventListener('click',function(e){
    e.preventDefault()
    console.log(input.value)
    const val = input.value
    if(val === ''){
        notification.classList.add('show')
    }else{
        notification.classList.remove('show')
        document.getElementById('pre-msg').innerText = input.value
        input.value = ''
    }  
})