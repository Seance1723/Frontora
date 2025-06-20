(function(){
  var hasGSAP = typeof gsap !== 'undefined';
  window.frInitModals = function(root){
    (root || document).querySelectorAll('[data-modal]').forEach(function(btn){
      btn.addEventListener('click', function(){
        var target = document.querySelector(btn.getAttribute('data-modal'));
        if(!target) return;
        target.classList.add('show');
        if(hasGSAP){ gsap.from(target.querySelector('.fr-modal-content'),{opacity:0,y:-20,duration:0.4}); }
      });
    });

    (root || document).querySelectorAll('.fr-modal').forEach(function(modal){
      modal.addEventListener('click', function(e){
        if(e.target !== modal) return;
        if(hasGSAP){
          gsap.to(modal.querySelector('.fr-modal-content'),{opacity:0,y:-20,duration:0.3,onComplete:function(){modal.classList.remove('show');}});
        } else {
          modal.classList.remove('show');
        }
      });
    });
  };
})();