import {gsap} from "gsap";
gsap.set("#menuimg1-rollover", {alpha:0})

export const menu1TL = new gsap.timeline({paused:true});

const menurolloverAnimation = new gsap.timeline();

menurolloverAnimation.to("#menuimg1-rollover", {duration:.1, alpha:1})

menu1TL.add(menurolloverAnimation)