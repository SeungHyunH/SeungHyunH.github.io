export default function Footer({$app,initState}){
  const $target = document.createElement("footer");
  $target.className="footer";
  this.state = initState;
  let email = "";
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  $target.innerHTML = `
    <div>
      <img alt="Deck" src="/src/images/LogoWhite.svg">
      <pre>&copy;2018 Deck\nComponent based UI Kit</pre>
    </div>
    <div>
      ${this.state.map(e=>`<div>${e}</div>`).join("")}
    </div>
    <div>
      <div class="footerFollowSNS">
        <div>Follow us : </div>
        <img alt="instagram" data-key="instagram" class="SnsBtn" src="/src/images/instagram.svg" >
        <img alt="pinterest" data-key="pinterest" class="SnsBtn" src="/src/images/pinterest.svg" >
        <img alt="twitter" data-key="twitter" class="SnsBtn" src="/src/images/twitter.svg" >
        <img alt="facebook" data-key="facebook" class="SnsBtn" src="/src/images/facebook.svg" >
      </div>
      <div class="footerSubscribeWrap">
        <input type="email" class="footerSubscribeInput" placeholder="Your E-mail"/>
        <button class="footerSubscribeBtn" >SUBSCRIBE</button>
      </div>
    </div>
  `;
  $target.addEventListener("change",e=>{
    if(e.target.closest(".footerSubscribeInput")){
      email = e.target.value;
    }
  });

  $target.addEventListener("click",e=>{
    if(e.target.closest(".SnsBtn")){
      const key = e.target.dataset.key;
      alert(`Follow ${key}!!`);
    }

    if(e.target.closest(".footerSubscribeBtn")){
      if(!emailRegex.test(email)){
        alert("Please write in email format!");
        return;
      }
      alert(`SUBSCRIBE : ${email}!!`);
    }
  })
  this.render = () =>{
    $app.append($target);
  }
}