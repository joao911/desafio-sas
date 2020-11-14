import React from 'react';
import arrow from './img/arrow.png';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './foward.scss'

const Foward: React.FC = () => {
  return (
      <div className="foward">
          <button>Avançar<FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
  );
}

export default Foward;