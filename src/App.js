import React from 'react';
import propTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired, 
  rating: propTypes.number
}

var foodILike = [
  {
    id:1,
    name: "kimchi", 
    image: "http://m.geumchi.com/web/product/big/201608/20_shop1_616044.jpg",
    rating: 4.9
  },
  {
    id:2,
    name: "ramen", 
    image: "http://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg",
    rating: 4.8
  },
  {
    id:3,
    name: "samgiopsal", 
    image: "https://pbs.twimg.com/media/EAo2Vv3UIAA3Dos.jpg",
    rating: 4.5
  },
  {
    id:4,
    name: "chadol", 
    image: "http://static.hubzum.zumst.com/hubzum/2017/11/08/11/f33bc32ecc744f03b22a8669d64348de_780x0c.jpg",
    rating: 3.9
  }, 
  {
    id:5,
    name: "kimbap", 
    image: "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/04/0461907459756bc3a56472da407a1a9d1.jpg",
    rating: 5.0
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} 
        />
      ))}
    </div>
  );
}

export default App;
