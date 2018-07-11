import React from "react";
import GreyBackgroundPart from '../background/grey-background-part';

require('./support.scss');


class Support extends React.Component {
  render() {
    return (
      <div id="support" className="support section">
        <GreyBackgroundPart type="top" />
        <div className="grey-background">
          <div className="support__titles section-content">
            <h6>SUPPORT</h6>
            <h2>Contact & Additional Information</h2>
            <p>
              Want to know more about OIL before becoming an active collaborator?
              <br/>In that case, please sign up to our weekly webinar!
            </p>
          </div>
          <div className="support-content section-content">
            <p>
              Meine Freundin ist nicht mehr schön<br />
              Ich leg mich in die Badewanne<br />
              Mit meinem Föhn
            </p>
          </div>
        </div>
        <GreyBackgroundPart type="bottom" />
      </div>
    )
  }
}

export default Support;
