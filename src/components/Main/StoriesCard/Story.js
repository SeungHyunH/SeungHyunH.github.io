export default function Story({$target,content,idx}){
  const $component = document.createElement("div");
  $component.className="Story";
  $component.innerHTML=`
    <div class="Story">
      <div>${idx}</div>
      <div>${content}</div>
    </div>
  `;
  $target.append($component);
}