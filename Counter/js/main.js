const target = document.querySelector('h1')
let valu = 0

const buttons = document.querySelectorAll('button')

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        if(this.classList.contains('add')){
            valu++
        }else if(this.classList.contains('sub')){
            valu--
        }
        target.innerText = valu

        if(valu > 0){
            target.style.color = 'limegreen'
        }else if(valu < 0){
            target.style.color = 'red'
        }else if(valu == 0){
            target.style.color = 'black'
        }
    })
})

