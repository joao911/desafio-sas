import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import QuestionNumber from '../../components/QuestionNumber';
import ContentBox from '../../components/ContentBox';

import api from '../../services/api';
import generateQuestions from '../../utils/generateQuestions';

import star from './img/Star.png';
import star1 from './img/Star1.png';
import './question.scss';

interface ParamProps {
  category_id: string;
}

interface Question {
  id: number;
  categoryName: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<String>;
  question: string;
}


const Questions: React.FC = () => {

  const { category_id } = useParams<ParamProps>();
  const [titleCategory, setTitleCategory] = useState('');
  const [question, setQuestion] = useState<Question>();
  const [answers, setAnswers] = useState<String[]>([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const response = await api.get(generateQuestions(Number(category_id), 'easy'));

      const question: Question = response.data.results[0];

      const answers = [
        ...question.incorrect_answers,
        question.correct_answer,
      ];

      setAnswers(answers);
      setTitleCategory(question.categoryName);
      setQuestion(question);
    }

    loadQuestions();
  }, [category_id]);

  return (
    <>
      <Header name={titleCategory} />
      <ContentBox>
        <main>
          
          {
            !!question ?
              (
                <>
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
              
                <h3>{question.question}</h3>
                </>
              ) :
              <div className="loader"></div>

          }

          {answers.map(answer => (
            <button
              className="styled-button"
            >
              {answer}
            </button>
          ))}
 
        </main>
      </ContentBox>
    </>
  );
}

export default Questions;