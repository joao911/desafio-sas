import React from 'react';
import oval from './img/oval.png';
import './wrong.scss';
const Wrong: React.FC = () => {
    return (
        <div className="wrong">
            <img src={oval} alt="Você errou"/>
            <p>Você errou!</p>
        </div>
    );
}

export default Wrong;