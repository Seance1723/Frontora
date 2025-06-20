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