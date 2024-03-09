import React, {useEffect} from 'react';
import {Null} from "../app/styles";

const CodeProjectWrapper = ({currentProject}) => {

  useEffect(() => {
    const checkScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //window.location.href = "/newRoute";
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      <Null/>
      <Null/>
    </>

  );
};

export default CodeProjectWrapper;