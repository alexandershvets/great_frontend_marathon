export function tabInit(tab) {
  const btns = tab.querySelectorAll('.tab__btn');
  const items = tab.querySelectorAll('.tab__item');
  
  btns.forEach( tabBtn => {

    tabBtn.addEventListener('click', function () {
      btns.forEach( el => el.classList.remove('active') );
  
      this.classList.add('active');
  
      const attrTabBtn = this.dataset.tab;
  
      items.forEach( tabItem => {
        tabItem.classList.remove('active');
  
        if ( tabItem.classList.contains(attrTabBtn) ) {
          tabItem.classList.add('active');
        }
      });
    });
    
  });
}
