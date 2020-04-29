import React from 'react';

const Idea = ({id, title, details, isCompleted, markCompleted, removeIdea}) => {
  return(
    <article>
      <div
        className={isCompleted ? 'complete' : ''}
        onClick={() => markCompleted(id)}
      >
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
      <button onClick={() => removeIdea(id)}>X</button>
    </article>
  )
}

export default Idea;
