import React from 'react';
import './buttom.scss';

interface Props{
  name: string;
}
const Buttom: React.FC<Props> = ({name}) => <button>{name}</button>;

export default Buttom;