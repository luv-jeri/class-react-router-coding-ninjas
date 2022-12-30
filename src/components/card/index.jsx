import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import useCart from './../../context/Cart.context';

function Card({ title, img, id }) {
  const { cartHandler, isInCart } = useCart();
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    setIsIn(isInCart(id));
  }, [id, isInCart]);

  return (
    <div
      className={style.card_container}
      onClick={() => {
        setIsIn(cartHandler(id));
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className={style.card_image}>
        <div className={style.image_container}>
          <img src={img} alt='icons' />
        </div>
      </div>
      <div className={style.card_content}>
        <h1 className={style.card_title}>{title}</h1>
        {isIn ? <h4>Added</h4> : null}
      </div>
    </div>
  );
}

export default Card;
