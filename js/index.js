const btnViewMenu = document.querySelector(".btn_open_menu");
const gnb = document.querySelector(".gnb");

const init = ()=> {
  if( window.matchMedia('(min-width:769px)').matches ){
    btnViewMenu.classList.add('hide');
  }else{
    btnViewMenu.classList.remove('hide');
  }
}


window.addEventListener('click',e =>{
  const openMenu = e.target.closest(".btn_open_menu");
  if(openMenu && openMenu.classList[0]==="btn_open_menu"){
    if(openMenu.classList[1]==="close"){
      openMenu.classList.remove("close");
      openMenu.classList.add("open");
      gnb.classList.remove("close");
      gnb.classList.add("open");
    }else{
      openMenu.classList.remove("open");
      openMenu.classList.add("close");
      gnb.classList.add("close");
      gnb.classList.remove("open");
    }
  }
});

window.addEventListener('resize',e =>{
  if( window.matchMedia('(min-width:769px)').matches ){
    btnViewMenu.classList.add('hide');
  }else{
    btnViewMenu.classList.remove('hide');
  }
});

init();