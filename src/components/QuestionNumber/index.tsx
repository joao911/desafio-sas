import React from 'react';

 import './questionNumber.scss';
 interface Props{
   title: string;
 }

const QuestionNumber: React.FC<Props> = ({title}) => {
  return (
    <div className="questionNumber">
      <p>{title}</p>
    </div>
  );
}

export default QuestionNumber;