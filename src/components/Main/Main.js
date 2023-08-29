import SlideCard from "./SlideCard/SlideCard.js";
import InfoCard from "./InfoCard/InfoCard.js";
import Card from "./Card/Card.js";
import StoriesCard from "./StoriesCard/StoriesCard.js";

export default function Main({$app}){
  const $target = document.createElement("div");
  $target.className="main";

  new SlideCard({$target,initState:{curIdx:0,data:[{
    share:275,
    views:275,
    comments:12,
    category:"FINANCE",
    title:"This tie brand is bucking the retail\napocalypse with a massive store expansion",
    content:"There is a lot of exciting stuff going on in the stars above us\nthat make astronomy so much fun. The truth is the universe\nis a constantly changing, moving.",
    imageUrl:"/src/images/green-chameleon-176136.png"
  },
  {
    share:275,
    views:275,
    comments:12,
    category:"FINANCE",
    title:"This tie brand is bucking the retail\napocalypse with a massive store expansion",
    content:"There is a lot of exciting stuff going on in the stars above us\nthat make astronomy so much fun. The truth is the universe\nis a constantly changing, moving.",
    imageUrl:"/src/images/oliur-rahman-123819.png"
  }
  ]}}).render();

  new StoriesCard({$target,initState:[
    "Compare Prices: Find The\nBest Computer Accessory",
    "Why You Should Use\nExternal IT Support",
    "Why You Should Use In-\nHouse IT Support",
    "Choosing The Best Audio\nPlayer Software",
    "Addiction When Gambling\nBecomes A Problem"
  ]}).render();

  new InfoCard({$target,initState:{
    title:"THIS TIE BRAND IS\nBUCKING THE RETAIL\nAPOCALYPSE WITH A\nMASSIVE STORE\nEXPANSION",
    content:"The universe is constantly\nchanging, moving. Some would\nsay it’s a “living” thing because\nyou never know what you are\ngoing to see on any given night.",
  }}).render();

  new Card({$target,initState:{
    col:1,
    row:1,
    share:275,
    views:275,
    comments:12,
    category:"FINANCE",
    content:"Unmatched Toner\nCartridge Quality: 20%\nLess Than OEM Price",
    imageUrl:"/src/images/oliur-rahman-123819.png"
  }}).render();

  new Card({$target,initState:{
    col:2,
    row:1,
    share:275,
    views:275,
    comments:12,
    category:"ENTERTAINMENT",
    content:"Here’s The Difference Between Used,\nRefurbished, Remarketed, And Rebuilt\nElectronic Equipment",
    imageUrl:"/src/images/oliur-rahman-272875.png"
  }}).render();

  new Card({$target,initState:{
    col:1,
    row:1,
    share:275,
    views:275,
    comments:12,
    category:"FINANCE",
    content:"Optimize Your PC’s\nPerformance With\nThese 3 Programs",
    imageUrl:"/src/images/igor-son-285029.png"
  }}).render();

  new Card({$target,initState:{
    col:1,
    row:1,
    share:275,
    views:275,
    comments:12,
    category:"GAMING",
    content:"Search Engine\nOptimization And\nAdvertising",
    imageUrl:"/src/images/crew-22235.png"
  }}).render();

  new Card({$target,initState:{
    col:1,
    row:1,
    share:275,
    views:275,
    comments:12,
    category:"TECHNOLOGY",
    content:"Where To Find Unique\nMyspace Layouts",
    imageUrl:"/src/images/dose-media-344938.png"
  }}).render();

  this.render = () =>{
    $app.append($target);
  }
}