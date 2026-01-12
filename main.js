// Main interactions for the ZAYN1x demo
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // entrance animation using IntersectionObserver
  const card = document.querySelector('.card');
  card.style.opacity = 0;
  card.style.transform = 'translateY(18px)';
  const io = new IntersectionObserver(([e])=>{
    if(e.isIntersecting){
      card.style.transition = 'opacity .7s cubic-bezier(.2,.9,.3,1), transform .7s cubic-bezier(.2,.9,.3,1)';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
      io.disconnect();
    }
  }, {threshold: 0.15});
  io.observe(card);

  // load lottie if present
  try {
    if(window.lottie){
      const path = 'assets/lottie/hero.json';
      fetch(path, {method:'HEAD'}).then(res => {
        if(res.ok){
          lottie.loadAnimation({
            container: document.getElementById('lottie-hero'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: path
          });
          // remove fallback visuals if animation loaded
          const fb = document.querySelector('#lottie-hero .fallback');
          if(fb) fb.style.display = 'none';
        } else {
          // no file found; keep fallback
        }
      }).catch(()=>{/* no-op */});
    }
  } catch(err){ console.warn('Lottie failed to load', err) }

  // gentle parallax / shine movement using GSAP if available
  if(window.gsap){
    gsap.to('.glow', {y: 10, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut'});
    gsap.to('.animWrap', {y: -8, duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut'});
    gsap.utils.toArray('.btn').forEach(b => {
      b.addEventListener('mouseenter', ()=> gsap.to(b, {y: -4, duration: .18}), {passive:true});
      b.addEventListener('mouseleave', ()=> gsap.to(b, {y: 0, duration: .18}), {passive:true});
    });
  }
});
