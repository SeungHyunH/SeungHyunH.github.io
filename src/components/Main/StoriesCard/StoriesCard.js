import Story from "./Story.js";

export default function StoriesCard({$target,initState}){
  const $component = document.createElement("div");
  $component.className="storiesCard";
  this.state = initState;
  $component.innerHTML=`
    <div class="StoryCardTitle">FEATURED\nSTORIES</div>
  `;

  this.state.forEach((content,idx)=>{
    idx++;
    Story({$target:$component,content,idx});
  });

  this.render = () =>{
    $target.append($component);
  }
}