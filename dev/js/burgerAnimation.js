import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {gsap} from "gsap";
gsap.registerPlugin(DrawSVGPlugin);
gsap.set(".xline",{alpha:1})

export const burgerTL = new gsap.timeline({paused:true})

const burgerout = new gsap.timeline();
burgerout.to(".burgerline", {duration:.16, stagger:.1, alpha:0})

const xlines = new gsap.timeline();
xlines.from(".xline", {drawSVG:"50% 50%", ease:"none", duration: .17, alpha:0})

burgerTL.add(burgerout)
.add (xlines)