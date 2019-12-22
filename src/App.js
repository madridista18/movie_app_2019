import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture}/>
    </div>
  );
}

var foodILike = [
  {
    name: "kimchi", 
    image: "http://m.geumchi.com/web/product/big/201608/20_shop1_616044.jpg"
  },
  {
    name: "ramen", 
    image: "http://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg"
  },
  {
    name: "samgiopsal", 
    image: "https://pbs.twimg.com/media/EAo2Vv3UIAA3Dos.jpg"
  },
  {
    name: "chadol", 
    image: "http://static.hubzum.zumst.com/hubzum/2017/11/08/11/f33bc32ecc744f03b22a8669d64348de_780x0c.jpg"
  }, 
  {
    name: "kimbap", 
    image: "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/04/0461907459756bc3a56472da407a1a9d1.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
