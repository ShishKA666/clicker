let money = 0;
let clicks = 0;


document.querySelector(".button").onclick = function(){
    clicks = clicks + 1;
    document.querySelector("#score").innerHTML = clicks;
}

document.querySelector("#o-button").onclick = function(){
    if (clicks<10){
        document.querySelector("#warning").innerHTML = "Недостаточно кликов!";
    }
    
    else if (clicks >= 10){
        clicks = clicks - 10;
        money = money + 1;
        document.querySelector("#money").innerHTML = money;
        document.querySelector("#score").innerHTML = clicks;
    }
    
    
}


function busterOne(){
    clicks = clicks + 5;
    document.querySelector("#score").innerHTML = clicks;
}