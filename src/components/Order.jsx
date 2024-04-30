import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function Order(props) {
  return (
    <div className='item'>
      <img src={'./img/' + props.item.img} alt={props.item.id}/>
        <h2>{props.item.title}</h2>
        <b>{props.item.price}$</b>
        <MdDeleteForever className='delete-icon' onClick={() => props.onDelete(props.item.id)}/>
    </div>
  )
}

export default Order;
