import {gsap} from "gsap";
gsap.set("#menuimg2-rollover", {alpha:0})

export const menu2TL = new gsap.timeline({paused:true});

const menurollover2Animation = new gsap.timeline();

menurollover2Animation.to("#menuimg2-rollover", {duration:.1, alpha:1})

menu2TL.add(menurollover2Animation)