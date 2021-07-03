const add_button = document.querySelector('.plus')
const main_input = document.querySelector('input')
const main_ul = document.querySelector('.list-group')
const clear_button = document.querySelector('.clear')
const pending_digit = document.querySelector('.number')

window.onload = ()=>{
    let stored_lists = localStorage.getItem('todos')
    console.log(stored_lists)
    if(stored_lists === null){
        todo_list = []                                         
    }else{
        todo_list = JSON.parse(stored_lists)
    }
    show_ul()
    
}


function show_ul(){
    let list_texts = ''
    todo_list.forEach((item,index)=>{
        list_texts += `<li class="list-group-item d-flex  align-items-center mb-2">${item}
                        <span class="badge badge-primary badge-pill circle" onclick="delete_task(${index})">
                        <i class="fas fa-trash"></i>
                        </span>
                        </li>`;
    })
    main_ul.innerHTML = list_texts;
    pending_digit.textContent = todo_list.length
}


add_button.addEventListener('click',function(){
    const value = main_input.value
    if(value){
        todo_list.push(value)
        show_ul()
        main_input.value = ''
    }
})


function delete_task(num){
    todo_list = todo_list.filter((value,index)=>{
        if(index !== num){
            return value 
        }
    })
    console.log(todo_list)
    show_ul()
}

clear_button.addEventListener('click',function(){
    todo_list = []
    show_ul()
})

window.onunload = ()=>{
    list_string = JSON.stringify(todo_list)
    localStorage.setItem('todos', list_string);
}