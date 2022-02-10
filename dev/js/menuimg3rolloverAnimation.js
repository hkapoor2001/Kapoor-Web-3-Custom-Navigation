import {gsap} from "gsap";
gsap.set("#menuimg3-rollover", {alpha:0})

export const menu3TL = new gsap.timeline({paused:true});

const menurollover3Animation = new gsap.timeline();

menurollover3Animation.to("#menuimg3-rollover", {duration:.1, alpha:1})

menu3TL.add(menurollover3Animation)