//UI
const picdiv = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend',dragend);

//DRAD START
function dragstart(){
    // console.log('drag start is working');

    // this.classList.add('hold');

    this.className += ' hold';

    setTimeout(()=>{
        this.className = 'invisible';
    },0);

}

empties.forEach(empty=>{
        
    empty.addEventListener('dragover',dragover);
    empty.addEventListener('dragenter',dragenter);
    empty.addEventListener('dragleave',dragleave);
    empty.addEventListener('drop',dragdrop);

});

 // => ES16 .can looping object5-specific iterator value
//  for(const empty of empties){
//     console.log(empty);
// }

//numberable property name of 
// for(const empty in empties){
//     console.log(empty);
// }

//DRAG END
function dragend(){
    // console.log('drag end is working');

    this.className += ' fill';
}

function dragover(e){
    // console.log('drag over');
    e.preventDefault();
    
}

function dragenter(e){
    // console.log('drag enter');
    e.preventDefault();

    this.className += ' hovered';
}

function dragleave(e){
    // console.log('drag leave');
    e.preventDefault();


    this.className = 'empty';
}

function dragdrop(){
    // console.log('drag drop');


    this.className = 'empty';
    this.append(picdiv);
}

