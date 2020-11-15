import React from 'react';

import Header from '../../components/Header';
import QuestionNumber from '../../components/QuestionNumber';
import ContentBox from '../../components/ContentBox';

import star from './img/Star.png';
import star1 from './img/Star1.png';
import './question.scss';

const Questions: React.FC = () => {
  return (
    <>
      <Header name="História" />
      <ContentBox>
        <main>
          <div className="question-header">
            <QuestionNumber title="Questão 1" />
            <div className="badge">
              <div className="stars-group">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star1} alt="" />
              </div>
              <span>Médio</span>
            </div>
          </div>
          
          <h3>
            Sobre a conhecida idade dos metais, na transição entre a Pré-historia e a História é possivel afirmar que
          </h3>

          <button>
            Não existe ligação entre o uso dos metais e a formação de grandes imperios
          </button>
          <button>
            Não existe ligação entre o uso dos metais e a formação de grandes imperios
          </button>
          <button>
            Não existe ligação entre o uso dos metais e a formação de grandes imperios
          </button>
          <button>
            Não existe ligação entre o uso dos metais e a formação de grandes imperios
          </button>
        </main>
      </ContentBox>
    </>
  );
}

export default Questions;