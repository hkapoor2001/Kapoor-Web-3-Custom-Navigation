import { burgerTL } from "./burgerAnimation.js";
import { displayWindowSize } from "./windowSize.js";
import { menuAnimation } from "./menuAnimation.js";
import { divAnimation } from "./divAnimation.js";
import { menu1TL } from "./menuimg1rolloverAnimation.js";
import { menu2TL } from "./menuimg2rolloverAnimation.js";
import { menu3TL } from "./menuimg3rolloverAnimation.js";


var burgerButton= document.querySelector("#burger")
burgerButton.addEventListener("click", OpenCloseMenu)

var menu1= document.querySelector("#menuli1")
menu1.addEventListener("mouseenter", MenuRollover1enter)
menu1.addEventListener("mouseleave", MenuRollover1leave)

let IsMenuRollover1Active = false;
function MenuRollover1enter(){
    if(IsMenuRollover1Active === false){
        menu1TL.play();
        IsMenuRollover1Active = true;
    }
}

function MenuRollover1leave(){
    if(IsMenuRollover1Active === true){
        menu1TL.reverse();
        IsMenuRollover1Active = false;
    }
}



var menu2= document.querySelector("#menuli2")
menu2.addEventListener("mouseenter", MenuRollover2)
menu2.addEventListener("mouseleave", MenuRollover2leave)

let IsMenuRollover2Active = false;
function MenuRollover2(){
    if(IsMenuRollover2Active === false){
        menu2TL.play();
        IsMenuRollover2Active = true;
    }
}

function MenuRollover2leave(){
    if(IsMenuRollover2Active === true){
        menu2TL.reverse();
        IsMenuRollover2Active = false;
    }
}

var menu3= document.querySelector("#menuli3")
menu3.addEventListener("mouseenter", MenuRollover3)
menu3.addEventListener("mouseleave", MenuRollover3leave)

let IsMenuRollover3Active = false;
function MenuRollover3(){
    if(IsMenuRollover3Active === false){
        menu3TL.play();
        IsMenuRollover3Active = true;
    }
}

function MenuRollover3leave(){
    if(IsMenuRollover3Active === true){
        menu3TL.reverse();
        IsMenuRollover3Active = false;
    }
}












let CanISeeMenu = false;
function OpenCloseMenu(){
    if(CanISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        divAnimation.play();
        CanISeeMenu = true;
    }
    else{
        burgerTL.reverse();
        menuAnimation.reverse();
        divAnimation.reverse();
        CanISeeMenu = false;}
}


window.addEventListener("resize", displayWindowSize )
window.addEventListener("load", displayWindowSize )