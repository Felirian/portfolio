import React from 'react';
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import s from './portraitPhotos.module.scss'
import img1 from '../../assets/portraitPhoto/1.jpeg'
import img2 from '../../assets/portraitPhoto/2.jpeg'
import img3 from '../../assets/portraitPhoto/3.jpeg'
import img4 from '../../assets/portraitPhoto/4.jpeg'
import img5 from '../../assets/portraitPhoto/5.jpeg'
import img6 from '../../assets/portraitPhoto/6.jpeg'
import img7 from '../../assets/portraitPhoto/7.jpeg'
import img8 from '../../assets/portraitPhoto/8.jpeg'
import img9 from '../../assets/portraitPhoto/9.jpeg'
import img10 from '../../assets/portraitPhoto/10.jpeg'
import img11 from '../../assets/portraitPhoto/11.jpeg'
import img12 from '../../assets/portraitPhoto/12.jpeg'
import img13 from '../../assets/portraitPhoto/13.jpeg'
import img14 from '../../assets/portraitPhoto/14.jpeg'
import img15 from '../../assets/portraitPhoto/15.jpeg'
import img16 from '../../assets/portraitPhoto/16.jpeg'

const PortraitPhotos = () => {
  return (
    <div className={s.portrait_wrapper}>
      <h1>PortraitPhotos</h1>
      <div className={s.photos_wrapper}>
        <PhotoCard
          image={img1}
          imageInfo={'img001.raw- Canon 600D- iso:800'}
          width={32.29}
          height={43.13}
        />
        <PhotoCard
          image={img2}
          imageInfo={'img002.raw- Canon 600D- iso:800'}
          width={32.29}
          height={43.13}
        />
        <PhotoCard
          image={img3}
          imageInfo={'img003.raw- Canon 600D- iso:800'}
          width={32.29}
          height={43.13}
        />
        <PhotoCard
          image={img4}
          imageInfo={'img004.raw- Canon 600D- iso:800'}
          width={48.96}
          height={36.72}
        />
        <PhotoCard
          image={img5}
          imageInfo={'Photo5-canon 600D - iso:800'}
          width={48.96}
          height={36.72}
        />
        <PhotoCard
          image={img6}
          imageInfo={'Photo6-canon 600D - iso:800'}
          width={98.96}
          height={65.99}
        />
        <PhotoCard
          image={img7}
          imageInfo={'Photo7-canon 600D - iso:800'}
          width={48.96}
          height={32.60}
        />
        <PhotoCard
          image={img8}
          imageInfo={'Photo8-canon 600D - iso:800'}
          width={48.96}
          height={32.60}
        />
      </div>

      <h1>PortraitPhotos</h1>
      <h1>PortraitPhotos</h1>
      <h1>PortraitPhotos</h1>
    </div>
  );
};

export default PortraitPhotos;