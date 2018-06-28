import React from "react";
import CollaborateLink from '../collaborate-link/collaborate-link';

require('./collaboration.scss');


class Collaboration extends React.Component {
  render() {
    return (
      <div className="collaboration section">
        <img className="collaboration-image" src="http://placehold.it/1125x652"/>

        <div className="collaboration-content section-content two-cols">
          <div className="collaboration-left left">
            <h6>COLLABORATION</h6>
            <h2>Development</h2>

            <p>Engage and empower yourself or your development team by becoming a technical expert for consent management. Test-it, Feedback -it, Fork-it. Let’s fuel OIL together.</p>
            <div className="divider"/>
            <CollaborateLink/>
            <img className="some-image" src="http://placehold.it/435x289"/>

          </div>
          <div className="collaboration-right right">
            <img className="some-image" src="http://placehold.it/435x289"/>

            <h6>COLLABORATION</h6>
            <h2>Transparency &
              Consent Framework</h2>

            <p>Engage and empower yourself or your development team by becoming a technical expert for consent management. Test-it, Feedback -it, Fork-it. Let’s fuel OIL together.</p>
            <div className="divider"/>
            <CollaborateLink/>
          </div>
        </div>
      </div>
    )
  }
}

export default Collaboration;
