import React from 'react';
import Header from '../../components/Header';
import QuestionNumber from '../../components/QuestionNumber'
import star from './img/Star.png';
import './question.scss';

const Questiions: React.FC = () => {
  return (
    <div className="question">
      <Header name="História"/>
      <main>
        <div className="level">
        <QuestionNumber title="Questão 1"/>
        <div className="middle">
<img src={star} alt=""/>
        </div>
        </div>
        
      </main>
    </div>
  );
}

export default Questiions;