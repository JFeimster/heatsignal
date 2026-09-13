const btn=document.getElementById('pulseBtn');
const panel=document.getElementById('pulse');
const close=document.getElementById('pulseClose');
function setPulse(open){panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open));btn.setAttribute('aria-expanded',String(open));}
btn.addEventListener('click',()=>setPulse(!panel.classList.contains('open')));
close.addEventListener('click',()=>setPulse(false));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setPulse(false)});
