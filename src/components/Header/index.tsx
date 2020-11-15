import React from 'react';
import { motion } from 'framer-motion';

import './header.scss'

const Header: React.FC = () => {
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
          <h1>Dev Mobile</h1>
      </motion.header>
  );
}

export default Header;