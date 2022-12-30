import React from 'react';
import style from './Learn.module.css';
import { useParams } from 'react-router-dom';
import coursesData from '../../../data/courses.json';

function Learn() {
  const { id } = useParams();
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>Popular Courses</h1>
        <h4>Choose you katana ⚔️</h4>
      </div>
      {coursesData.map((course, index) => {
        if (course.id === id) {
          return (
            <div key={index} className={style.card_container}>
              <div className={style.card_image}>
                <div className={style.image_container}>
                  <img src={course.img} alt='icons' />
                </div>
              </div>
              <div className={style.card_content}>
                <h1 className={style.card_title}>{course.title}</h1>
                <p className={style.card_description}>{course.description}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Learn;
