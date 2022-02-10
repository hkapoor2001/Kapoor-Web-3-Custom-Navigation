import { burgerTL } from "./burgerAnimation.js";
import { displayWindowSize } from "./windowSize.js";
import { menuAnimation } from "./menuAnimation.js";
import { divAnimation } from "./divAnimation.js";
var burgerButton= document.querySelector("#burger")
burgerButton.addEventListener("click", OpenCloseMenu)


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