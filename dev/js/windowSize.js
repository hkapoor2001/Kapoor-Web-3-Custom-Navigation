import { gsap } from "gsap";

export function displayWindowSize(){
    let menu = document.querySelector("#nav-container")
    let menuHeight = -menu.offsetHeight
    gsap.set("#nav-container", {y:menuHeight})
}