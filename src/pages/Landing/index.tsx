import React from 'react';

import { motion } from 'framer-motion';

import Header from '../../components/Header';
import Button from '../../components/Button';

import './landing.scss';

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <motion.main
        initial={{
          translateX: -40,
          opacity: 0,
        }}
        animate={{
          translateX: 0,
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        }}
      >

        <h2>Categorias</h2>
        
        <div>
          <Button name="história" />
          <Button name="Geografia" />
          <Button name="Mitologia" />
          <Button name="Esportes" />
          <Button name="Política"/>
          <Button name="Conhecimentos gerais"/>
        </div>

      </motion.main>
      
    </>
  );
}

export default Landing;