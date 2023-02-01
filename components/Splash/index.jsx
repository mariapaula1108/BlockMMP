import React, { useEffect } from "react";
import SplashScreen from "../SplashScreen";
import * as mdc from "material-components-web";
import styled from "styled-components";
import "./Splash.css";

function Splash(props) {
  const { splashScreenProps } = props;

  useEffect(() => {
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised .mdc-button"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <form className="splash screen" name="form3" action="form3" method="post">
        <OverlapGroup1>
          <SplashScreen whitetriangle={splashScreenProps.whitetriangle} blockmmpLogo={splashScreenProps.blockmmpLogo} />
          <a href="javascript:SubmitForm('login')">
            <div className="button-raised">
              <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
                <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Go</span>
              </button>
            </div>
          </a>
        </OverlapGroup1>
      </form>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  width: 411px;
  height: 852px;
  position: relative;
  margin-left: -18px;
`;

export default Splash;
