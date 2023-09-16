const btnViewMenu = document.querySelector(".btn_open_menu");
const gnb = document.querySelector(".gnb");
window.addEventListener('click',e =>{
  const openMenu = e.target.closest(".btn_open_menu");
  if(openMenu && openMenu.classList[0] === "btn_open_menu"){
    console.log("메뉴버튼클릭");
  }
});
window.addEventListener('resize',e =>{
  if( window.matchMedia('(min-width:769px)').matches ){
    btnViewMenu.classList.add('hide');
    gnb.classList.remove('hide');
  }else{
    btnViewMenu.classList.remove('hide');
    gnb.classList.add('hide');
  }
});