import React from 'react';
import s from '../styles/components/photos.module.scss'
import img1_1 from '../assets/photos/1.1.png'
import img1_2 from '../assets/photos/1.2.png'
import img1_3 from '../assets/photos/1.3.png'
import img2_1 from '../assets/photos/2.1.png'
import img2_2 from '../assets/photos/2.2.png'
import img2_3 from '../assets/photos/2.3.png'
import img3_1 from '../assets/photos/3.1.png'
import img3_2 from '../assets/photos/3.2.png'
import img3_3 from '../assets/photos/3.3.png'

const Photos = () => {
  return (
    <div className={s.photos}>
      <div className={s.photos_row_1}>
        <img className={s.photos_row_image} src={img1_1}/>
        <img className={s.photos_row_image} src={img1_2}/>
        <img className={s.photos_row_image} src={img1_3}/>
      </div>
      <div className={s.photos_row_2}>
        <img className={s.photos_row_image} src={img2_1}/>
        <img className={s.photos_row_image} src={img2_3}/>
        <img className={s.photos_row_image} src={img2_2}/>
      </div>
    </div>
  );
};

export default Photos;