import React from 'react';
import s from '../styles/pages/main.module.scss'
import Photos from "../components/Photos";

const Main = () => {

  return (
    <div className={s.main}>
      <Photos />
    </div>
  );
};

export default Main;