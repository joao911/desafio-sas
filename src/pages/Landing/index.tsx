import React from 'react';

import { motion } from 'framer-motion';

import Header from '../../components/Header';
import Button from '../../components/Button';

import ContentBox from '../../components/ContentBox';

import './landing.scss';

const Landing: React.FC = () => {
  return (
    <>
      <Header />

      <ContentBox>
        <h2>Categorias</h2>

        <div>
          <Button name="história" />
          <Button name="Geografia" />
          <Button name="Mitologia" />
          <Button name="Esportes" />
          <Button name="Política"/>
          <Button name="Conhecimentos gerais"/>
        </div>
      </ContentBox>

        
        
    </>
  );
}

export default Landing;