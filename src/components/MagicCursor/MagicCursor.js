import React, {useContext, useEffect, useState} from 'react';
import s from './MagicCursor.module.scss'
import {MagicCursorHover, MagicCursorInfo} from "../context";
const MagicCursor = () => {
  const [info, setInfo] = useContext(MagicCursorInfo)
  const [hover, setHover] = useContext(MagicCursorHover)
  useEffect(() => {
    const cursor = document.getElementById('magic_cursor')
    document.addEventListener('mousemove', ev => {
      cursor.style.left = ev.clientX + -20 + 'px';
      cursor.style.top = ev.clientY + -20 + 'px';
    })
  }, []);

  return (
    <>
      <div
        className={s.magic_cursor}
        id={'magic_cursor'}
      >
        <div className={s.info}>
          <p>Hover on photo</p>
          <p>Hover on photo</p>
          <p>Hover on photo</p>
        </div>

      </div>
    </>

  );
};

export default MagicCursor;