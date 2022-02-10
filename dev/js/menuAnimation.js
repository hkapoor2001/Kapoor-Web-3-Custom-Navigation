import { gsap } from "gsap";

export const menuAnimation = new gsap.timeline({paused:true});
menuAnimation.to("#nav-container", {duration:0.3, y:0, x:0});