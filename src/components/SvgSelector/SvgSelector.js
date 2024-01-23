import s from './svgSelector.scss'

const SvgSelector = ({svg}) => {

  switch (svg) {
    //---HEADER---\\
    case "Burger":
      return (
        <>
          <svg className={s.Burger} viewBox="0 0 24 24" width="2.08vw" height="2.08vw">
            <g id="_01_align_center" data-name="01 align center" fill={'white'}>
              <rect id={'first'} x="4" y="6" width="16" height="1"/>
              <rect id={'second'} x="4" y="11" width="16" height="1"/>
              <rect id={'third'} x="4" y="16" width="16" height="1"/>
            </g>
          </svg>
        </>
      );

    default:
      return <></>;
  }
};


export default SvgSelector;