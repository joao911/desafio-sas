import React from 'react';
import Header from '../../components/Header';
import QuestionNumber from '../../components/QuestionNumber';
import Asking from '../../components/Asking';
import Answer from '../../components/Answer';
import star from './img/Star.png';
import star1 from './img/Star1.png';
import './question.scss';

const Questions: React.FC = () => {
  return (
    <div className="question">
      <Header name="História" />
      <main>
        <div className="level">
          <QuestionNumber title="Questão 1" />
          <div className="middle">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star1} alt="" />
            <p>Médio</p>
          </div>
        </div>
        <Asking name="Sobre a conhecida idade dos metais, na transição entre a Pré-historia e a História é possivel afirmar que"/>
        <Answer name="Não existe ligação entre o uso dos metais e a formação de grandes imperios"/>
        <Answer name="Não existe ligação entre o uso dos metais e a formação de grandes imperios"/>
        <Answer name="Não existe ligação entre o uso dos metais e a formação de grandes imperios"/>
        <Answer name="Não existe ligação entre o uso dos metais e a formação de grandes imperios"/>
      </main>
    </div>
  );
}

export default Questions;