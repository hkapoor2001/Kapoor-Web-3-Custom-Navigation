import {gsap} from "gsap";
gsap.set(".navdiv", {scaleY:0})
// gsap.set(".navdiv",{transformOrigin:bottom,center})

export const divAnimation = new gsap.timeline({paused:true});

divAnimation.to(".navdiv", {scaleY:-1, duration:.3, stagger:-.05, ease: "linear"})