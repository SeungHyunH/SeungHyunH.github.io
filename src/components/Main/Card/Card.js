export default function Card({$target,initState}){
  const $component = document.createElement("div");
  $component.className="card";
  this.state = initState;
  $component.style.gridColumn=`span ${this.state.col}`;
  $component.style.gridRow=`span ${this.state.row}`;
  $component.style.backgroundImage=`url(${this.state.imageUrl})`;
  $component.innerHTML=`
    <div class="cardCategory">${this.state.category}</div>
    <div class="cardContent">${this.state.content}</div>
    <div class="cardFooter">
      <div><img alt="share" src="/src/images/share.svg"><div>${this.state.share}</div></div>
      <div><img alt="views" src="/src/images/views.svg"><div>${this.state.views}</div></div>
      <div><img alt="comments" src="/src/images/comments.svg"><div>${this.state.comments}</div></div>
    </div>
  `

  this.render = () =>{
    $target.append($component);
  }
}