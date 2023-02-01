
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Disclaimer from "./components/Disclaimer";
import LogIn from "./components/LogIn";
import Splash from "./components/Splash";
import MyAccount from "./components/MyAccount";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/splash">
          <Splash splashScreenProps={splashData.splashScreenProps} />
        </Route>
        <Route path="/form3">
          <LogIn />
        </Route>
        <Route path="/:path(|form2)">
          <Disclaimer {...disclaimerData} />
        </Route>
        <Route path="/form1">
          <MyAccount />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const splashScreenData = {
    whitetriangle: "/img/whitetriangle@1x.png",
    blockmmpLogo: "/img/blockmmp-logo@1x.png",
};

const splashData = {
    splashScreenProps: splashScreenData,
};

const disclaimerData = {
    logo: "/img/img-3604-1@1x.png",
    disclaimer: "Disclaimer",
    spanText1: <React.Fragment><br /><br /></React.Fragment>,
    spanText2: <React.Fragment>42 CFR Part 2 - Statutory authority for confidentiality of substance use <br />disorder patient records.<br /><br />2.1 Statutory authority for confidentiality of substance use disorder <br />patient records.<br /><br />2.2 Purpose and effect.<br /></React.Fragment>,
    spanText3: " ",
    spanText4: "(a)",
    spanText5: <React.Fragment> Purpose. Pursuant to 42 U.S.C. 290dd-2(g), the regulations in this part<br /> impose restrictions upon the disclosure and use of substance use<br /> disorder patient records which are maintained in connection with the <br /> performance of any part 2 program. The regulations in this part include<br /> the following subparts:<br />           </React.Fragment>,
    spanText6: " ",
    spanText7: "(1)",
    spanText8: " ",
    spanText9: <React.Fragment>Subpart B of this part: General Provisions, including definitions, <br />            applicability, and general restrictions;<br />            </React.Fragment>,
    spanText10: "(2) ",
    spanText11: <React.Fragment>Subpart C of this part: Disclosures with Patient Consent, <br />            including disclosures which require patient consent and the consent <br />            form requirements;<br />           </React.Fragment>,
    spanText12: " (3) ",
    spanText13: <React.Fragment>Subpart D of this part: Disclosures without Patient Consent, <br />            including disclosures which do not require patient consent or an <br />            authorizing court order; and </React.Fragment>,
    spanText14: "i",
    spanText15: <React.Fragment>f this is an emergency situation<br /><br /><br /></React.Fragment>,
    spanText16: <React.Fragment>        <br />                                       <br /></React.Fragment>,
    spanText17: "",
    byClickingTheAbov: <React.Fragment>By clicking the above, you agree to all terms and conditions as per the <br />above disclaimer. An email alert with login information will be sent to <br />the patient’s primary clinic</React.Fragment>,
    iAgreeToTheAboveDisclaimer: "I agree to the above disclaimer",
};

