import React from 'react';
import Header from '../../components/Header';
import white from './img/white.png';
import pink from './img/pink.png';
import cap from './img/bone.png';
import body from './img/body.png';
import eye from './img/olho.png';
import eye1 from './img/olho1.png';
import mouth from './img/boca.png';
import hand from './img/mao.png';
import leg from './img/perna.png';
import foot from './img/pe.png';
import grafic from './img/grafic.png';
import ball from './img/ball.png';
import teste from './img/teste.jpeg';
import './result.scss';

const Result: React.FC = () => {
    return (
        <div className="result">
            <Header name="Historia" />
            <main>
                <img src={teste} alt=""/>
               <div className="results">
                   <div className="hits">
                       <h1>7</h1>
                       <p>acertos</p>
                   </div>
                   <div className="lose">
                       <h1>3</h1>
                       <p>erros</p>
                   </div>
               </div>
            </main>
        </div>
    );
}

export default Result;