(function(){
var d=document,de=d.documentElement;
var mb=d.querySelector('.hamburger'),dr=d.querySelector('.mob-drawer'),ov=d.querySelector('.mob-overlay');
function openM(){dr.classList.add('open');ov.classList.add('open');de.style.overflow='hidden';mb.setAttribute('aria-expanded','true')}
function closeM(){dr.classList.remove('open');ov.classList.remove('open');de.style.overflow='';mb.setAttribute('aria-expanded','false')}
if(mb&&dr&&ov){mb.addEventListener('click',openM);ov.addEventListener('click',closeM);
d.querySelector('.mob-close').addEventListener('click',closeM);
dr.addEventListener('click',function(e){if(e.target.closest('a'))closeM()});
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
window.addEventListener('resize',function(){if(window.innerWidth>768)closeM()})}
function setH(a,open){a.style.maxHeight=open?a.scrollHeight+'px':'0px'}
d.querySelectorAll('.faq-q').forEach(function(b){
var a=d.getElementById(b.getAttribute('aria-controls'));
if(b.getAttribute('aria-expanded')==='true')setH(a,true);
b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',o?'false':'true');setH(a,!o)})});
window.addEventListener('resize',function(){d.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(function(b){setH(d.getElementById(b.getAttribute('aria-controls')),true)})});
})();
