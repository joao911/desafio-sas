import React from 'react';

import './header.scss'
interface Props{
  name: string;
}
const Header: React.FC<Props> = ({name}) => {
  return (
      <header>
          <h1>{name}</h1>
      </header>
  );
}

export default Header;