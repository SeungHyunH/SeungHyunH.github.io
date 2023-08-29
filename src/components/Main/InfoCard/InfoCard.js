export default function InfoCard({$target,initState}){
  const $component = document.createElement("div");
  $component.className="infoCard";
  this.state = initState;
  $component.innerHTML=`
    <div class="infoCardTitle">${this.state.title}</div>
    <div class="infoCardContent">${this.state.content}</div>
    <button class="infoCardBtn">READ MORE</button>
  `

  $component.addEventListener("click",e=>{
    if(e.target.closest(".infoCardBtn")){
      console.log("READ MORE");
    }
  });
  this.render = () =>{
    $target.append($component);
  }
}