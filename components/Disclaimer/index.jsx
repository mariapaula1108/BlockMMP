import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import "./Disclaimer.css";

function Disclaimer(props) {
  const {
    logo,
    disclaimer,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    byClickingTheAbov,
    iAgreeToTheAboveDisclaimer,
  } = props;

  useEffect(() => {
    mdc.autoInit();
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised .mdc-button"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <form className="disclaimer screen" name="form1" action="form1" method="post">
        <Header>
          <OverlapGroup1>
            <PurpleRectangle2></PurpleRectangle2>
            <Logo src={logo} alt="Logo" />
          </OverlapGroup1>
        </Header>
        <OverlapGroup2>
          <DisclaimerText>
            <Disclaimer1>{disclaimer}</Disclaimer1>
            <OverlapGroup>
              <X42CFRPart2St>
                <Span>{spanText1}</Span>
                <span className="notosans-medium-black-10px">{spanText2}</span>
                <span className="notosans-normal-black-10px">{spanText3}</span>
                <span className="notosans-medium-black-10px">{spanText4}</span>
                <span className="notosans-normal-black-10px">{spanText5}</span>
                <span className="notosans-medium-black-10px">{spanText6}</span>
                <span className="notosans-semi-bold-black-10px">{spanText7}</span>
                <span className="notosans-medium-black-10px">{spanText8}</span>
                <span className="notosans-normal-black-10px">{spanText9}</span>
                <span className="notosans-semi-bold-black-10px">{spanText10}</span>
                <span className="notosans-normal-black-10px">{spanText11}</span>
                <span className="notosans-semi-bold-black-10px">{spanText12}</span>
                <span className="notosans-normal-black-10px">{spanText13}</span>
                <Span13>{spanText14}</Span13>
                <span className="notosans-medium-crimson-10px">{spanText15}</span>
                <span className="notosans-medium-black-10px">{spanText16}</span>
                <span className="notosans-medium-crimson-10px">{spanText17}</span>
              </X42CFRPart2St>
              <ByClickingTheAbov>{byClickingTheAbov}</ByClickingTheAbov>
            </OverlapGroup>
          </DisclaimerText>
          <Checkbox>
            <div className="checkbox-unselected">
              <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                <input type="checkbox" className="mdc-checkbox__native-control" />
                <div className="mdc-checkbox__background">
                  <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                  </svg>
                  <div className="mdc-checkbox__mixedmark"></div>
                </div>
                <div className="mdc-checkbox__ripple"></div>
              </div>
            </div>
            <IAgreeToTheAboveDisclaimer>{iAgreeToTheAboveDisclaimer}</IAgreeToTheAboveDisclaimer>
          </Checkbox>
          <a href="javascript:SubmitForm('form1')">
            <div className="button-raised">
              <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
                <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Submit</span>
              </button>
            </div>
          </a>
        </OverlapGroup2>
      </form>
    </div>
  );
}

const Header = styled.header`
  width: auto;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 393px;
  background-color: transparent;
`;

const OverlapGroup1 = styled.div`
  width: 393px;
  height: 118px;
  position: relative;
`;

const PurpleRectangle2 = styled.div`
  position: absolute;
  width: 393px;
  height: 118px;
  top: 0;
  left: 0;
  background-color: var(--astronaut);
  border: 1px solid;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #293372;
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 92px;
  height: 92px;
  top: 13px;
  left: 151px;
  border-radius: 46px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  width: 370px;
  height: 695px;
  position: relative;
  margin-left: 3px;
`;

const DisclaimerText = styled.div`
  position: absolute;
  width: 370px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 695px;
  gap: 54px;
`;

const Disclaimer1 = styled.div`
  min-height: 22px;
  margin-top: 2px;
  margin-left: 6px;
  min-width: 82px;
  font-family: var(--font-family-noto_sans);
  font-weight: 700;
  color: var(--orange-red);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 370px;
  height: 618px;
  position: relative;
`;

const X42CFRPart2St = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-family-noto_sans);
  color: var(--crimson);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 10px;
  white-space: nowrap;
  font-weight: 500;
`;

const Span = styled.span`
  font-weight: 700;
  color: #ff0000;
`;

const Span13 = styled.span`
  font-weight: 400;
  font-size: var(--font-size-s);
`;

const ByClickingTheAbov = styled.p`
  position: absolute;
  width: 363px;
  height: 302px;
  top: 316px;
  left: 7px;
  font-family: var(--font-family-noto_sans);
  font-weight: 600;
  color: var(--orange-red);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
`;

const Checkbox = styled.div`
  position: absolute;
  width: 219px;
  height: 41px;
  top: 349px;
  left: 88px;
  display: flex;
  justify-content: space-between;
`;

const IAgreeToTheAboveDisclaimer = styled.p`
  align-self: flex-end;
  margin-bottom: -7px;
  width: 184px;
  height: 36px;
  margin-right: -2px;
  font-family: var(--font-family-noto_sans);
  font-weight: 600;
  color: #272727;
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

export default Disclaimer;
