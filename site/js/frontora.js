(function(){
  var hasGSAP = typeof gsap !== 'undefined';
  window.frInitDropdowns = function(root){
    (root || document).querySelectorAll('.fr-dropdown-toggle').forEach(function(btn){
      btn.addEventListener('click', function(){
        var menu = btn.nextElementSibling;
        if(!menu) return;
        var show = !menu.classList.contains('show');
        if(show){
          menu.classList.add('show');
          if(hasGSAP){ gsap.from(menu,{opacity:0,y:-10,duration:0.3}); }
        }else{
          if(hasGSAP){ gsap.to(menu,{opacity:0,y:-10,duration:0.2,onComplete:function(){menu.classList.remove('show');}}); }
          else{ menu.classList.remove('show'); }
        }
      });
    });
  };
})();
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
(function(){
  var hasGSAP = typeof gsap !== 'undefined';
  window.frInitAccordions = function(root){
    (root || document).querySelectorAll('.fr-accordion-header').forEach(function(header){
      header.addEventListener('click', function(){
        var item = header.parentElement;
        var content = item.querySelector('.fr-accordion-content');
        var expand = !item.classList.contains('active');
        if(expand){
          item.classList.add('active');
          if(hasGSAP && content){ gsap.from(content,{height:0,opacity:0,duration:0.3}); }
        }else{
          if(hasGSAP && content){ gsap.to(content,{height:0,opacity:0,duration:0.2,onComplete:function(){ item.classList.remove('active'); content.style.height=''; }}); }
          else{ item.classList.remove('active'); }
        }
      });
    });
  };
})();
(function(){
  var hasGSAP = typeof gsap !== 'undefined';
  window.frInitAlerts = function(root){
    (root || document).querySelectorAll('.fr-alert-close').forEach(function(btn){
      btn.addEventListener('click', function(){
        var alert = btn.parentElement;
        if(hasGSAP){
          gsap.to(alert,{opacity:0,height:0,duration:0.3,onComplete:function(){alert.remove();}});
        }else{ alert.remove(); }
      });
    });
  };
})();
(function(){
  var hasGSAP = typeof gsap !== 'undefined';
  window.frSetProgress = function(selector,value){
    var el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if(!el) return;
    var bar = el.querySelector('.fr-progress-bar');
    if(!bar) return;
    var width = Math.max(0,Math.min(100,value))+'%';
    if(hasGSAP){ gsap.to(bar,{width:width,duration:0.4}); }
    else{ bar.style.width = width; }
  };
})();
(function(){
  var hasGSAP = typeof gsap !== 'undefined';
  function hide(toast){
    if(hasGSAP){
      gsap.to(toast,{opacity:0,duration:0.3,onComplete:function(){toast.classList.remove('show');}});
    }else{
      toast.classList.remove('show');
    }
  }
  window.frShowToast = function(id,delay){
    var toast = document.querySelector(id);
    if(!toast) return;
    toast.classList.add('show');
    if(hasGSAP){ gsap.from(toast,{opacity:0,y:10,duration:0.3}); }
    if(delay !== false){ setTimeout(function(){ hide(toast); }, delay||3000); }
  };
  window.frHideToast = function(id){
    var toast = typeof id === 'string' ? document.querySelector(id) : id;
    if(toast) hide(toast);
  };
})();
(function(){
  if(window.frInitDropdowns) frInitDropdowns();
  if(window.frInitModals) frInitModals();
  if(window.frInitAccordions) frInitAccordions();
  if(window.frInitAlerts) frInitAlerts();
})();