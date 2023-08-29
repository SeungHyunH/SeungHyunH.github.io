export default function SlideCard({$target,initState}){
  const $component = document.createElement("div");
  $component.className="slideCard";
  this.state = initState;

  this.setData = () =>{
    $component.style.backgroundImage=`url(${this.state.data[this.state.curIdx].imageUrl})`;
    $component.innerHTML=`
      <button class="slideCardPrev" ><img alt="←" src="/src/images/ArrowPrev.svg"></button>
      <button class="slideCardNext" ><img alt="→" src="/src/images/ArrowNext.svg"></button>
      <div class="slideCardCategory">${this.state.data[this.state.curIdx].category}</div>
      <div class="slideCardMain">
        <div class="slideCardTitle">${this.state.data[this.state.curIdx].title}</div>
        <div class="slideCardContent">${this.state.data[this.state.curIdx].content}</div>
      </div>
      <div class="slideCardFooter">
        <div><img alt="share" src="/src/images/share.svg"><div>${this.state.data[this.state.curIdx].share}</div></div>
        <div><img alt="views" src="/src/images/views.svg"><div>${this.state.data[this.state.curIdx].views}</div></div>
        <div><img alt="comments" src="/src/images/comments.svg"><div>${this.state.data[this.state.curIdx].comments}</div></div>
      </div>
    `;
  }

  $component.addEventListener("click",e=>{
    if(e.target.closest(".slideCardPrev")){
      if(this.state.curIdx+1 === 0) return;
      this.state.curIdx-=1;
      this.setData();
    }

    if(e.target.closest(".slideCardNext")){
      if(this.state.curIdx+1 === this.state.data.length) return;
      this.state.curIdx+=1;
      this.setData();
    }
  });

  this.render = () =>{
    $target.append($component);
    this.setData();
  }
}