import React from 'react';
import style from './Learn.module.css';
import { useParams, Outlet, Link , } from 'react-router-dom';
import coursesData from '../../../data/courses.json';

function Learn() {
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === id);
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>{course.title}</h1>
        <h4>{course.description}</h4>
      </div>
      <div className={style.chapters}>
        <h1>Chapters</h1>
        <ul>
          {course.chapters.map((chapter, index) => {
            return (
              <li key={index}>
                <Link to={`chapter/${chapter.chapter}`}>{chapter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.courses}>
        <Outlet
          context={{
            ...course,
          }}
        />
      </div>
    </div>
  );
}

export default Learn;
