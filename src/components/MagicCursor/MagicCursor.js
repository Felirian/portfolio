import React, {useContext, useEffect, useState} from 'react';
import s from './MagicCursor.module.scss'
import {MagicCursorHover, MagicCursorInfo} from "../context";
import cn from 'classnames'

const MagicCursor = () => {
  const [info, setInfo] = useContext(MagicCursorInfo)
  const [hover, setHover] = useContext(MagicCursorHover)
  let infoText = info.split('-')
  console.log(infoText);
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
        className={s.magic_cursor_wrapper}
        id={'magic_cursor'}
      >
        <div className={cn(hover ? s.cursor_hover : s.cursor_simple)}/>

        <div
          className={s.info}
        >
          <h4
            style={{
              opacity: hover ? 1 : 0,
            }}
          >{infoText[0]}</h4>
          {infoText.length > 1 && infoText.slice(1).map((text, i) => (
            <p
              key={i}
              style={{
                transitionDelay: `${i * 0.1}s`,
                opacity: hover ? 1 : 0,
            }}

            >{text}</p>
          ))}
        </div>


      </div>
    </>

  );
};

export default MagicCursor;