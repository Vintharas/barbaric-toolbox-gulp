import {TapeMachine} from "./codes";

const tp = new TapeMachine();
tp.record("Hello... Hellooooo!!! Helloooooo!!!!!");
tp.play();
// => Hello... Hellooooo!!! Helloooooo!!!!!

const p = document.createElement("p");
p.innerText = "Victory!";
document.querySelector("body").appendChild(p);
