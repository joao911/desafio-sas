import React from 'react';
import { motion } from 'framer-motion';

import './styles.scss';

const ContentBox: React.FC = ({ children }) => (
    <motion.section
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

        {children}
    </motion.section>
);

export default ContentBox;