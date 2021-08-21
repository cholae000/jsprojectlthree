const display = document.querySelector('.display');
const startbtn = document.querySelector('.btn-start');
const pausebtn = document.querySelector('.btn-pause');
const resetbtn = document.querySelector('.btn-reset');

// let miliisecond = 0,
//     second = 0,
//     minute = 0,
//     hour = 0;

let [miliisecond,second,minute,hour] = [0,0,0,0];
let time;

//Event Listener
startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

//Start Timer
function starttimer(){
    if(time != null){
        clearInterval(time);
    }
    time = setInterval(displaytimer,100);
};

//Pause Timer
function pausetimer(){
    clearInterval(time);
};

//Reset TImer
function resettimer(){
    clearInterval(time);
    [miliisecond,second,minute,hour] = [0,0,0,0];
    display.innerText = `00 : 00 : 00 : 000`;
};

//Display Timer
function displaytimer(){
    miliisecond += 10;
    if(miliisecond === 1000){
        miliisecond = 0;
        // console.log(miliisecond);
        second ++;

        if(second == 60){
            second = 0;
            minute ++;

            if(minute === 60 ){
                minute = 0;
                hour++;
            }
        }
    }

    let h = hour < 10 ? '0'+hour : hour;
    let m = minute < 10? '0'+minute : minute;
    let s = second < 10? '0'+second : second;
    let ms = miliisecond < 10 ? '00'+miliisecond :
        miliisecond < 100 ? '0'+miliisecond : miliisecond;
        
    display.innerText = `${h} : ${m} : ${s} : ${ms}`;

}



