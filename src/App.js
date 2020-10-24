import React from 'react';
import {Data} from './Data';
import svg from './icons/arrow.svg'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="flex_products">                    
          {Data.map((item) =>  (<div className="product_item">
            <div className="card_discount">
              {item.discount ? <span className="discount">{item.discount}% OFF</span>: ""}
              <h4 className="quantity">{item.qty} items left</h4>
            </div>
            <div className="card_slider">
              <img className="arrow left" src={svg} alt={svg} />
              <img className="arrow right" src={svg} alt={svg} />
              <img className="slider_image" src={item.img_front} alt={item.name} />
              <div className="slider_dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="flex_content">
              <h3>{item.name}</h3>
              <div className="description_content">
                {item.price !== item.final_price && <h4 className="price">${item.price}</h4>}
                <h3 className="final_price">${item.final_price}</h3>
                <h4 className="shipping">+ Free Shipping</h4>                
              </div>
              <a className={item.qty !== 0 ? "button" : "button disabled"} href={item.link}>{item.qty > 0 ? "Shop Now" : "Sold Out"}</a>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;
