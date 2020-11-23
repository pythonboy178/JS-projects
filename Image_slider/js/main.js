images = ['car1.jpg','car2.jpg','car3.jpg','car4.jpg']

img = document.querySelector('img')

buttons= document.querySelectorAll('button')
let val = 0

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        if(val < 3){
            val ++
        }else{
            val = 0
        }
        img.src = './images/'+images[val]

    })
})