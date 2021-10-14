//UI
const button = document.getElementById('btn');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
];

//Event Listener
button.addEventListener('click',()=>creatnotification('Can\'t access!','danger'));

function creatnotification(message,type){
    const notify = document.createElement('div');
    notify.classList.add('toast');
    notify.classList.add(type ? type : 'info');
    notify.innerText = message ? message : getrandommessage();
    toasts.appendChild(notify);

    setTimeout(()=>{
        notify.remove();
    },3000);
}

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}