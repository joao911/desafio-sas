import React from 'react';
import oval3 from './img/Oval3.png';
import 'correct.scss'

const Correct: React.FC = () => {
    return (
        <div>
            <img src={oval3} alt="Você acertou" />
            <p>Você acertou!</p>
        </div>
    );
}

export default Correct;