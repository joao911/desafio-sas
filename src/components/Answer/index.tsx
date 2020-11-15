import React from 'react';
import './answer.scss'
interface Props{
    name: string;
}

const Answer: React.FC<Props> = ({name}) => {
  return (
      <div className="answer">
          <p>{name}</p>
      </div>
  );
}

export default Answer;