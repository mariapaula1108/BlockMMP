import React, { useEffect } from "react";
import Header from "../Header";
import * as mdc from "material-components-web";
import "./LogIn.css";

function LogIn() {
  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".patient-id .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".location .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".password .mdc-text-field"));
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised .mdc-button"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <form className="login screen" name="form2" action="form2" method="post">
        <Header />
        <div className="patient-id">
          <label className="mdc-text-field mdc-text-field--filled">
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
              Patient ID
            </span>
            <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            <span className="mdc-line-ripple"></span>
          </label>
        </div>
        <div className="location">
          <label className="mdc-text-field mdc-text-field--filled">
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
              Location
            </span>
            <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            <span className="mdc-line-ripple"></span>
          </label>
        </div>
        <div className="password">
          <label className="mdc-text-field mdc-text-field--filled">
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
              Password
            </span>
            <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            <span className="mdc-line-ripple"></span>
          </label>
        </div>
        <a href="javascript:SubmitForm('form2')">
          <div className="button-raised">
            <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
              <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Log In</span>
            </button>
          </div>
        </a>
      </form>
    </div>
  );
}

export default LogIn;
