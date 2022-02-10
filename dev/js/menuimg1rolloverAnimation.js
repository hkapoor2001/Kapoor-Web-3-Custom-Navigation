import {gsap} from "gsap";
gsap.set("#menuimg1-rollover", {alpha:0})

export const menu1TL = new gsap.timeline({paused:true});

const menurolloverAnimation = new gsap.timeline();
const logorolloverAnimation = new gsap.timeline();
const textrolloverAnimation = new gsap.timeline();

menurolloverAnimation.to("#menuimg1-rollover", {duration:.1, alpha:1})
logorolloverAnimation.to(".logosvg", {duration:.05, fill: "#FFA5C9"})
textrolloverAnimation.to("#shortstoriesh1", {duration:.05, color: "#FFA5C9"})

menu1TL.add(menurolloverAnimation)
.add(logorolloverAnimation)
.add(textrolloverAnimation)