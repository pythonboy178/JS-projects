datas = [{
        quote:'You only live once, but if you do it right, once is enough.',
        author:'Mae West'
    },
    {
        quote:'To live is the rarest thing in the world. Most people exist, that is all.',
        author:'Oscar Wilde'
    },
    {
        quote:'I may not have gone where I intended to go, but I think I have ended up where I needed to be.',
        author:'Douglas Adams'
    },
    {
        quote:'It is better to be hated for what you are than to be loved for what you are not',
        author:'Andre Gide'
    },
    {
        quote:'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
        author:'Albert Einstein'
    }
]

const button = document.querySelector('button');
const quote = document.querySelector('h3');
const author = document.getElementById('auth');

button.addEventListener('click',function(){
    const val = parseInt(Math.random()*datas.length)
    quote.textContent = datas[val].quote
    author.textContent = datas[val].author
    console.log(val)
})