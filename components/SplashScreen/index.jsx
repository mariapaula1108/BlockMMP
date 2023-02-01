import React from "react";
import styled from "styled-components";


function SplashScreen(props) {
  const { whitetriangle, blockmmpLogo } = props;

  return (
    <SplashScreen1>
      <OverlapGroup>
        <PurpleRectangle></PurpleRectangle>
        <WhiteTriangle src={whitetriangle} alt="WhiteTriangle" />
        <BlockMMPLogo src={blockmmpLogo} alt="BlockMMP Logo" />
      </OverlapGroup>
    </SplashScreen1>
  );
}

const SplashScreen1 = styled.div`
  position: absolute;
  height: 852px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 411px;
`;

const OverlapGroup = styled.div`
  width: 411px;
  height: 852px;
  position: relative;
`;

const PurpleRectangle = styled.div`
  position: absolute;
  width: 393px;
  height: 852px;
  top: 0;
  left: 18px;
  background-color: var(--astronaut);
  border: 1px solid;
`;

const WhiteTriangle = styled.img`
  position: absolute;
  width: 411px;
  height: 132px;
  top: 720px;
  left: 0;
  object-fit: cover;
`;

const BlockMMPLogo = styled.img`
  position: absolute;
  width: 276px;
  height: 276px;
  top: 214px;
  left: 77px;
  object-fit: cover;
`;

export default SplashScreen;
