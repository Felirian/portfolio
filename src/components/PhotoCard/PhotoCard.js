import React, {useContext} from 'react';
import {MagicCursorHover, MagicCursorInfo} from "../context";
import s from './photoCard.module.scss'
const PhotoCard = ({image, imageInfo, width, height}) => {
  const [info, setInfo] = useContext(MagicCursorInfo)
  const [hover, setHover] = useContext(MagicCursorHover)


  return (
    <div
      className={s.img_wrapper}
      style={{
        width: `${width}vw`,
        height: `${height}vw`,
      }}
    >
      <img
        src={image}
        alt={'f'}
        onMouseEnter={() => {
          setHover(true)
          setInfo(imageInfo)
        }}
        onMouseLeave={() => setHover(false)}
      />
    </div>
  );
};

export default PhotoCard;