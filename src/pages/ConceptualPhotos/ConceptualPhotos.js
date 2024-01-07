import React from 'react';
import {gsap} from "gsap";
//import {ScrollSmoother} from "gsap/ScrollSmoother";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const ConceptualPhotos = () => {
  gsap.registerPlugin(ScrollTrigger)
  //ScrollSmoother.create()
  return (
    <div>
      <h1>Conceptual Photos</h1>
    </div>
  );
};

export default ConceptualPhotos;