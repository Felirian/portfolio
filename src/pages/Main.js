import React from 'react';
import s from '../styles/pages/main.module.scss'
import Portrait from "../components/Portrait";
import Conceptual from "../components/Conceptual";

const Main = () => {

  return (
    <div className={s.main}>
      {/*<Portrait />*/}
      <Conceptual />
    </div>
  );
};

export default Main;