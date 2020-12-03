const timeLimit = 20;

let timeinsec = timeLimit;
var putTime = document.getElementById("time");

display(timeinsec);

const clock = setInterval (()=>{

    timeinsec--;
    display(timeinsec);
    if(timeinsec <= 0){
        timeout();
        //Delay();
        clearInterval(clock);
        
        setTimeout(() => {
            location.href="endgame.html";
        }, 2000); 
    }

},1000)

function display(seconds){
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    if(sec<10){ putTime.style.color="red" ;}
    putTime.innerHTML = `${min<10 ? '0' : ''}${min} : ${sec<10 ? '0' : ''}${sec}`;
}

function timeout(){
    putTime.innerHTML = 'Time Out!';
}

/*
function Delay(){
    var x =5;
    const delay = setInterval(()=>{ 
         x--;
    },1000)
}
*/
