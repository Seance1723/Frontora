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