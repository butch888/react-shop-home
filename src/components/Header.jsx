import React, { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import Order from './Order';

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach(el => total+= Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
            <Order key={el.id} item={el} onDelete={props.onDelete}/>
      ))}
      <p className='total'>Сумма: {total.toFixed(2)}</p>
    </div>
  )
};

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false);
  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <MdShoppingCart onClick={()=>setCardOpen(!cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`}/>
        {cardOpen && 
        <div className='shop-card'>
          {props.orders.length > 0 ? showOrders(props) : showNothing()}
        </div>}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
