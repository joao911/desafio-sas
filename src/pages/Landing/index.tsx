import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './landing.scss';

const Landing: React.FC = () => {
  return (
    <div>
      <Header name="Dev Mobile"/>
      <main>
        <p>Categorias</p>
        <Button name="história" />
        <Button name="História"/>
        <Button name="Geografia" />
        <Button name="Mitologia" />
        <Button name="Esportes" />
        <Button name="Política"/>
        <Button name="Conhecimentos gerais"/>
        
        
      </main>
      
    </div>
  );
}

export default Landing;