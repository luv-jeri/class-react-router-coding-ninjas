import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

function Chapter() {
  const { chap } = useParams();
  const course = useOutletContext();
  const chapter = course.chapters.find((chapter) => {
    return String(chapter.chapter) === String(chap);
  });
  console.log(chapter);
  return (
    <div>
      <h1>{chapter.title}</h1>
      <p>{chapter.description}</p>
      <p>{chapter.details}</p>
    </div>
  );
}

export default Chapter;
