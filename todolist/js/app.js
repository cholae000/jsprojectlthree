//UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');


const todos = JSON.parse(localStorage.getItem('todos'));
// console.log(todos);
// console.log(typeof todos);

if(todos){
    todos.forEach(todo=> addtodo(todo));
}

formel.addEventListener('submit',(e)=>{
    e.preventDefault();

    addtodo();
})

function addtodo(todo){
    // console.log('I\'m working');

    let todotext = inputel.value;
    // console.log(todotext);

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement('li');

        if(todo && todo.complete){
            li.classList.add('completed');
        }
        li.appendChild(document.createTextNode(todotext));
        // console.log(li);
        todoul.appendChild(li);
        inputel.value = '';

        li.addEventListener('click',()=>{
            li.classList.toggle('completed');

            updatelocalstorage();
        });

        // remove by rightclick
        li.addEventListener('contextmenu',(e)=>{
            li.remove();

            updatelocalstorage();


            e.preventDefault();
        })

        // add to localStorage
        updatelocalstorage();
        
    }else{
        window.alert('Enter your todo');
    }

}

function updatelocalstorage(){
    // console.log('alrady');

    let todolis = document.querySelectorAll('li');
    // console.log(todolis);

    const todos = [];

    todolis.forEach(todoli =>{
        // console.log(todoli);
        // console.log(todoli.innerText);

        todos.push({
            text : todoli.innerText,
            complete : todoli.classList.contains('completed')
        });

    })

    localStorage.setItem('todos',JSON.stringify(todos));


}