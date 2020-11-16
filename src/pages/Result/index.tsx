import React from 'react';
import Header from '../../components/Header';
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