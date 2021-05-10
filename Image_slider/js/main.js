images = ['car1.jpg','car2.jpg','car3.jpg','car4.jpg']

img = document.querySelector('img')

buttons= document.querySelectorAll('button')
let val = 0

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        if(this.classList.contains('left')){
            if(val > 0){
                val--
            }else{
                val = 3
            }
        }
        else if(this.classList.contains('right')){
            if(val < 3){
                val ++
            }else{
                val = 0
            }
        }
        
        img.src = './images/'+images[val]

    })
})
