import React from "react";
import GreyBackgroundPart from '../background/grey-background-part';
import ScrollableAnchor from 'react-scrollable-anchor'

require('./support.scss');


class Support extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'support'}>
        <div id="support" className="support section">
          <GreyBackgroundPart type="top"/>
          <div className="grey-background">
            <div className="support__titles section-content">
              <h6>SUPPORT</h6>
              <h2>Contact & Additional Information</h2>
              <p>
                Want to know more about OIL?
                <br/>
                Drop a message: <b><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#111;&#105;&#108;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#97;&#115;&#105;&#100;&#101;&#97;&#115;&#46;&#100;&#101;">&#111;&#105;&#108;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#97;&#115;&#105;&#100;&#101;&#97;&#115;&#46;&#100;&#101;</a></b>
              </p>
            </div>
          </div>
          <GreyBackgroundPart type="bottom"/>
        </div>
      </ScrollableAnchor>
    )
  }
}

export default Support;
