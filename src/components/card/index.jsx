import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
function Card({ title, img, id }) {
  return (
    <Link
      to={`/courses/${id}`}
      className={style.card_container}
      onClick={() => {}}
      style={{ cursor: 'pointer' }}
    >
      <div className={style.card_image}>
        <div className={style.image_container}>
          <img src={img} alt='icons' />
        </div>
      </div>
      <div className={style.card_content}>
        <h1 className={style.card_title}>{title}</h1>
      </div>
    </Link>
  );
}

export default Card;
