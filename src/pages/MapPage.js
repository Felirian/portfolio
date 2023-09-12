import React from 'react';
import {Wrapper, Status} from "@googlemaps/react-wrapper";


const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const MapPage = () => {

  return (
    <div style={{display: "flex", height: "100%"}}>
      <Wrapper apiKey={'AIzaSyD4Vg_zgCixHosxloyHLPT6QXKBnQv1iAI'} render={render}>


      </Wrapper>

    </div>
  );
};

export default MapPage;