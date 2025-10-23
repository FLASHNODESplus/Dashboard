
// Goosebumps neon background animation
const body=document.body;
let hue=0;
setInterval(()=>{hue+=1;body.style.background=`linear-gradient(135deg,hsl(${hue%360},100%,30%),hsl(${(hue+60)%360},100%,50%))`;},100);
