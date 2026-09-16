document.getElementById('year')?.append(new Date().getFullYear());
const glow=document.querySelector('.cursor-glow'); if(glow){window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'})}
