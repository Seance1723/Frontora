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