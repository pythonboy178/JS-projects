const data = [{
    image:'mash.jpg',
    name:'Mashrafe Bin Mortaza',
    profile:'Mashrafe Bin Mortaza is a Bangladeshi international cricketer and politician who is the former captain in all three formats of the game for the Bangladesh national cricket team and member of the parliament Jatiya Sangsad from Narail-2.',
    batting:3,
    bowling:5,
    fielding:4,
},{
    image:'mushi.jpg',
    name:'Mushfiqur Rahim',
    profile:"Mushfiqur Rahim is a Bangladeshi cricketer and the former captain of the Bangladesh national cricket team. Between August 2009 and December 2010 Rahim served as Bangladesh's vice-captain, across all formats. He is considered as the most successful captain of Bangladesh in tests",
    batting:5,
    bowling:1,
    fielding:4,
},{
    image:'riyad.jpg',
    name:'Mohammad Mahmudullah',
    profile:'Mahmudullah Riyad, often known simply as Mahmudullah, is a Bangladeshi cricketer and the current T20I captain. He has played First-class and List A cricket for Dhaka Division and has represented Bangladesh in all forms of the game. An all-rounder, he is a lower or middle-order batsman as well as an off spin bowler.',
    batting:4,
    bowling:3,
    fielding:4,
},{
    image:'sakib.jpg',
    name:'Shakib Al Hasan',
    profile:"Shakib Al Hasan is a Bangladeshi international cricketer who was consistently ICC's no.1 all rounder in all three formats of the game for a decade. He was ranked as the 2nd most valuable player of the century according to Wisden Cricketers' Almanack. ",
    batting:4,
    bowling:5,
    fielding:4,
},{
    image:'tamim.jpg',
    name:'Tamim Iqbal',
    profile:"Tamim Iqbal Khan is a Bangladeshi international cricketer. He is the current captain of Bangladesh's One Day International team. Tamim made his ODI debut in 2007 and played his first Test match the following year. He served as vice-captain of the national side between December 2010 and September 2011.",
    batting:4,
    bowling:1,
    fielding:4,
}
]

const image = document.querySelector('img');
const nam = document.getElementById('name');
const description = document.querySelector('p');
const bat = document.getElementById('bat');
const bowl = document.getElementById('bowl');
const field = document.getElementById('field');
const star = document.querySelector('.fa-star');
const buttons = document.querySelectorAll('button');


let counter = 0;

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        if(button.classList.contains('left-btn')){
            counter--
        } 
        if(button.classList.contains('right-btn')){
            counter++
        } 
        if(counter>4){
            counter = 0;
        }
        if(counter<0){
            counter = 4;
        }
        // console.log(counter);
        const player = data[counter];
        image.src = './images/'+ player.image;
        nam.innerHTML = player.name;
        description.innerHTML = player.profile;
        bat.innerHTML = player.batting;
        bowl.innerHTML = player.bowling;
        field.innerHTML = player.fielding;

        
    })
})