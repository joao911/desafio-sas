import React from 'react';

import './asking.scss';
interface Props{
  name: string;
}
const Asking: React.FC<Props> = ({name}) => {
  return (
      <div className="asking">
          <p>{name}</p>
      </div>
  );
}

export default Asking;