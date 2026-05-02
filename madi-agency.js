// NAV scroll
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);
});

// Mobile menu
function toggleMenu(){
  document.getElementById('mobile-menu').classList.toggle('open');
}

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}});
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-left').forEach(el=>obs.observe(el));

// Pre-fill plan from pricing
function scrollContact(plan){
  document.getElementById('f-plan').value=plan;
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}

// Form submit
function submitForm(e){
  e.preventDefault();
  const btn=e.target.querySelector('button[type=submit]');
  btn.disabled=true;
  btn.innerHTML='<span>Envoi en cours...</span>';
  setTimeout(()=>{
    document.getElementById('form-success').classList.remove('hidden');
    btn.innerHTML='<span>Envoyé ✓</span>';
    e.target.reset();
  },1200);
}