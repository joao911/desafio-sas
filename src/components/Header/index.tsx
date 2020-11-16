import React from 'react';
import { motion } from 'framer-motion';

import './header.scss'

interface HeaderProps {
  name?: string;
}

const Header: React.FC<HeaderProps> = ({ name = "Dev Mobile" }) => {
  return (
      <motion.header
        initial={{
          translateY: -20,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
      >
          <h1>{name}</h1>
      </motion.header>
  );
}

export default Header;