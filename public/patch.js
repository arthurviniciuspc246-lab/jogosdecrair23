(function(){
  const baseHome=home;
  home=function(){
    baseHome();
    const w=document.querySelector('.home');
    if(!w||w.dataset.doubleLock==='1')return;
    w.dataset.doubleLock='1';
    let last=0;
    w.addEventListener('click',function(e){
      if(e.target.closest('.app')||e.target.closest('.dock'))return;
      const now=Date.now();
      if(now-last<420){
        state.unlocked=false;
        save();
        lock();
        last=0;
      } else last=now;
    });
  };
  if(state.unlocked)home();
})();