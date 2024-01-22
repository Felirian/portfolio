import React, {useEffect} from 'react';
import Scrollbar from 'smooth-scrollbar';

const options = {
  damping: 0.1,
  thumbMinSize: 20,
  renderByPixels: true,
  alwaysShowTracks: false,
  continuousScrolling: true,
  wheelEventTarget: null,
}
const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);

  return null;
};

export default SmoothScroll;