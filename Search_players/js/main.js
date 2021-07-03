const player_list = [{
    name: 'Shakib Al Hasan',
    role: 'All-rounder',
    birthday: '24th March, 1987'
},{
    name: 'Tamim Iqbal',
    role: 'Batsman',
    birthday: '20th March, 1989'
},{
    name: 'Liton Kumar Das',
    role: 'Wicket-keeper/Batsman',
    birthday: '16th February, 1994'
},{
    name: 'Mushfiqur Rahim',
    role: 'Wicket-keeper/Batsman',
    birthday: '9th May, 1987'
},{
    name: 'Mohammad Mahmudullah',
    role: 'Allrounder',
    birthday: '4th February, 1986'
},{
    name: 'Mominul Haque',
    role: 'Batsman',
    birthday: '29th September, 1991'
},{
    name: 'Mustafizur Rahman',
    role: 'Bowler',
    birthday: '6th September, 1995'
},{
    name: 'Taijul Islam',
    role: 'Bowler',
    birthday: '7th February, 1992'
}];

const tab_body = document.querySelector('tbody')
const main_input = document.querySelector('input')
const all_button = document.querySelector('#all')
const bat_button = document.querySelector('#bat')
const ball_button = document.querySelector('#ball')
const all_rounder_button = document.querySelector('#round')
const toggle_button = document.querySelector('#dropdownMenuLink')

function list_show(list){
    let tab_rows = ''
    list.forEach((value,index)=>{
        tab_rows += `<tr>
            <th scope="row">${index+1}</th>
            <td>${value.name}</td>
            <td>${value.role}</td>
            <td>${value.birthday}</td>
          </tr>`;
    })
    tab_body.innerHTML = tab_rows
}

all_button.addEventListener('click',function(){
    list_show(player_list)
    toggle_button.textContent = 'ALL'
})

bat_button.addEventListener('click',function(){
    let updated_list = player_list.filter((value)=>{
        return value.role.toLowerCase().search(/Batsman/i) > -1
    })
    list_show(updated_list)
    toggle_button.textContent = 'Batsmen'
})

ball_button.addEventListener('click',function(){
    let updated_list = player_list.filter((value)=>{
        return value.role.toLowerCase().search(/Bowler/i) > -1
    })
    list_show(updated_list)
    toggle_button.textContent = 'Bowlers'
})

all_rounder_button.addEventListener('click',function(){
    let updated_list = player_list.filter((value)=>{
        return value.role.toLowerCase().search(/All-rounder/i) > -1
    })
    list_show(updated_list)
    toggle_button.textContent = 'All-rounders'
})

main_input.addEventListener('keyup',function(){
    val = main_input.value.toLowerCase()
    console.log(val)
    if(val){
        let updated_list = player_list.filter((value)=>{
            return value.name.toLowerCase().search(val) > -1
        })
        list_show(updated_list)
    }else{
        list_show(player_list)
    }
})



window.onload = ()=>{
    list_show(player_list)
}