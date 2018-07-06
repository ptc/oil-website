import React from "react";
import CollaborateLink from '../collaborate-link/collaborate-link';

require('./hero.scss');

const HeroButton = ({text, cssClass}) => {
  return <a className={"hero-button " + cssClass}>
    {text}
  </a>
};


class Hero extends React.Component {
  render() {
    return (
      <div id="hero" className="hero section grey-background">
        <div className="hero-content section-content">
          <div className="two-cols">
            <div className="hero-left left">
              <h1>OIL - fuel for your consent management.</h1>
              <p>OIL is a holistic consent management platform that enables your compliance with GDPR and ePrivacy.
                It is open-source, based on the IAB TCF Standard and is currently being developed by a collaboration of international publishers. </p>

              <HeroButton text="Sandbox" cssClass="light-blue-design"/>
              <HeroButton text="Github" cssClass="dark-blue-design"/>
              <CollaborateLink/>
            </div>
            <div className="hero-right right">
              <img src={require('./mutli-devices.png')}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
