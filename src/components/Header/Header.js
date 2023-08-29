import { routeChange } from "../../util/router.js";
export default function Header({$app,initState}){
  const $target = document.createElement("header");
  this.state = initState;
  $target.className="header";
  $target.innerHTML=`
    <div>
      <img class="headerHome" alt='Deck' src="/src/images/Logo.svg" >
      <nav class="headerNav">
        ${this.state.map((e,idx)=>`<button class="headerLink" data-key='${idx}'>${e}</button>`).join("")}
      </nav>
    </div>
    <img class="headerMenu" alt='Menu' src="/src/images/Menu icon.svg" >
  `;

  $target.addEventListener("click",e=>{
    if(e.target.closest(".headerLink")){
      const cur = e.target.closest(".headerLink");
      const key = cur.dataset.key;
      routeChange(this.state[key]);

    }

    if(e.target.closest(".headerHome")){
      routeChange("/");
    }
  })
  this.render = () =>{
    $app.append($target);
  }
}