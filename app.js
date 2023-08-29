import Footer from "./src/components/Footer/Footer.js";
import Header from "./src/components/Header/Header.js";
import Main from "./src/components/Main/Main.js";

import {init} from "./src/util/router.js";

export default function App($app){
  this.state = {
    menus : ["TECHNOLOGY","IDEAS","LEADERSHIP","VIDEO","NEWS","FINANCE","ENTERTAINMENT"]
  }
  const header = new Header({$app,initState:this.state.menus});
  const main = new Main({$app});
  const footer = new Footer({$app,initState:this.state.menus});
  this.route = () => {
    const { pathname } = location

    $app.innerHTML = ''
    header.render();
    if (pathname === '/') {
      main.render();
    }else if(pathname === "/TECHNOLOGY"){
      
    }else if(pathname === "/IDEAS"){
      
    }else if(pathname === "/LEADERSHIP"){
      
    }else if(pathname === "/VIDEO"){
      
    }else if(pathname === "/NEWS"){
      
    }else if(pathname === "/FINANCE"){
      
    }else if(pathname === "/ENTERTAINMENT"){
      
    }
    footer.render();
  }

  init(this.route);

  this.route();
  
  window.addEventListener('popstate', this.route)
}