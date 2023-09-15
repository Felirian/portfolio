import React, {useLayoutEffect} from 'react';
import s from "../styles/components/conceptual.module.scss"
import '../styles/components/photosID.scss'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {conceptual} from "../assets/photos";

const Conceptual = () => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#main1Image', {
      scrollTrigger: {
        trigger: '#main1',
        start: 'top top',
        end: '100% button',
        scrub: 1,
        //markers: 1
      },
      y: "-20%",
      ease: 1
    })
    gsap.to('#main2Image', {
      scrollTrigger: {
        trigger: '#main2',
        start: 'top top',
        end: '100% button',
        scrub: 1,
        //markers: 1
      },
      y: "-20%",
      ease: 1
    })

    const imagesGrid1 = document.getElementsByClassName(s.image1)
    for (let i = 0; i < imagesGrid1.length; i++) {
      gsap.to(imagesGrid1[i], {
        scrollTrigger: {
          trigger: `#grid1_box${i}`,
          start: '0% 70%',
          end: `100% 10%`,
          scrub: 1,
          //markers: 1
        },
        y: '-10%',
        ease: 1
      })
    }

    const imagesGrid2 = document.getElementsByClassName(s.image2)
    for (let i = 0; i < imagesGrid2.length; i++) {
      gsap.to(imagesGrid2[i], {
        scrollTrigger: {
          trigger: `#grid2_box${i}`,
          start: '0% 70%',
          end: `100% 10%`,
          scrub: 1,
          //markers: 1
        },
        y: '-10%',
        ease: 1
      })
    }

    const imagesGrid3 = document.getElementsByClassName(s.image3)
    for (let i = 0; i < imagesGrid3.length; i++) {
      gsap.to(imagesGrid3[i], {
        scrollTrigger: {
          trigger: `#grid3_box${i}`,
          start: '0% 70%',
          end: `100% 10%`,
          scrub: 1,
          //markers: 1
        },
        y: '-10%',
        ease: 1
      })
    }


  }, [conceptual]);

  return (
    <div className={s.photo}>

      <div className={s.main} id={'main1'}>
        <img
          src={conceptual[0].main1}
          id={'main1Image'}
        />
        <h1>Концептуальная съемка</h1>
      </div>

      <div className={s.grid1} id={'grid1'}>
        {conceptual[2]?.case1.map((img1, index) => (
          <div
            className={s.image_wrapper}
            key={index}
            id={`grid1_box${index}`}
            style={{height: `${img1.height * 0.8}px`}}
          >
            <img
              src={img1}
              key={index}
              id={`grid1_image${index}`}
              className={s.image1}

              //onLoad={setTriggers}
            />
          </div>
        ))}
      </div>

      <div className={s.main} id={'main2'}>
        <img
          src={conceptual[1].main2}
          id={'main2Image'}
        />
      </div>

      <div className={s.grid2} id={'grid2'}>
        {conceptual[3]?.case2.map((img2, index) => (
          <div
            className={s.image_wrapper}
            key={index}
            id={`grid2_box${index}`}
            style={{height: `${img2.height * 0.8}px`}}
          >
            <img
              src={img2}
              key={index}
              id={`grid2_image${index}`}
              className={s.image2}

              //onLoad={setTriggers}
            />
          </div>
        ))}
      </div>
      <div className={s.grid3} id={'grid2'}>
        {conceptual[4]?.case3.map((img3, index) => (
          <div
            className={s.image_wrapper}
            key={index}
            id={`grid3_box${index}`}
            style={{height: `${img3.height }px`}}
          >
            <img
              src={img3}
              key={index}
              id={`grid2_image${index}`}
              className={s.image3}

              //onLoad={setTriggers}
            />
          </div>
        ))}
      </div>

    </div>);
};

export default Conceptual;