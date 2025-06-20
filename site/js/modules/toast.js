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