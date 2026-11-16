const $=s=>document.querySelector(s),hd=$('header'),links=$('.links');
const onScroll=()=>hd.classList.toggle('solid',scrollY>40);onScroll();addEventListener('scroll',onScroll);
$('.menu').onclick=()=>links.classList.toggle('open');links.onclick=e=>{if(e.target.tagName==='A')links.classList.remove('open')};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
 const n=e.target.querySelector('[data-n]');if(n&&!n.done){n.done=1;const t=+n.dataset.n,s=performance.now();
 (function f(x){const p=Math.min((x-s)/1400,1);n.textContent=Math.round(t*p)+(p>=1?'+':'');if(p<1)requestAnimationFrame(f)})(s)}
 io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
$('#enquiry').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);
 const m=`Hello Jain Caterers!%0AName: ${f.get('name')}%0APhone: ${f.get('phone')}%0AEvent: ${f.get('event')}%0ADate: ${f.get('date')||'-'}%0AGuests: ${f.get('guests')||'-'}%0A${encodeURIComponent(f.get('msg')||'')}`;
 open('https://wa.me/918449717777?text='+m,'_blank')};
