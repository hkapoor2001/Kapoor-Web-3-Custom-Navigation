import {gsap} from "gsap";
gsap.set("#menuimg2-rollover", {alpha:0})

export const menu2TL = new gsap.timeline({paused:true});

const menurollover2Animation = new gsap.timeline();
const logorolloverAnimation = new gsap.timeline();
const textrolloverAnimation = new gsap.timeline();

menurollover2Animation.to("#menuimg2-rollover", {duration:.1, alpha:1})
logorolloverAnimation.to(".logosvg", {duration:.05, fill: "#ff9000"})
textrolloverAnimation.to("#poetryh1", {duration:.05, color: "#ff9000"})

menu2TL.add(menurollover2Animation)
.add(logorolloverAnimation)
.add(textrolloverAnimation)