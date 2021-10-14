//UI
const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

//Event Listener
openbtn.addEventListener('click',()=>{
    navs.forEach(function(nav){
        nav.classList.add('visible');
    })
});

closebtn.addEventListener('click',()=>{
    navs.forEach(function(nav){
        nav.classList.remove('visible');
    })
})
