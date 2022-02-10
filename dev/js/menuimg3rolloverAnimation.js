import {gsap} from "gsap";
gsap.set("#menuimg3-rollover", {alpha:0})

export const menu3TL = new gsap.timeline({paused:true});

const menurollover3Animation = new gsap.timeline();
const logorolloverAnimation = new gsap.timeline();
const textrolloverAnimation = new gsap.timeline();

menurollover3Animation.to("#menuimg3-rollover", {duration:.1, alpha:1})
logorolloverAnimation.to(".logosvg", {duration:.05, fill: "#26e156"})
textrolloverAnimation.to("#issueh1", {duration:.05, color: "#26e156"})

menu3TL.add(menurollover3Animation)
.add(logorolloverAnimation)
.add(textrolloverAnimation)