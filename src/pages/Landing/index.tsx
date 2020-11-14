import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

import './landing.scss';

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <main>

        <h2>Categorias</h2>
        
        <div>
          <Button name="história" />
          <Button name="Geografia" />
          <Button name="Mitologia" />
          <Button name="Esportes" />
          <Button name="Política"/>
          <Button name="Conhecimentos gerais"/>
        </div>

      </main>
      
    </>
  );
}

export default Landing;