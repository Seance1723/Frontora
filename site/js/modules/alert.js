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