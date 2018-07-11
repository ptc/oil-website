import React from "react";
import CollaborateLink from '../collaborate-link/collaborate-link';
import GreyBackgroundPart from '../background/grey-background-part';

require('./hero.scss');

const HeroButton = ({text, cssClass, href}) => {
  return <a className={"hero-button " + cssClass} href={href} target="_blank">
    {text}
  </a>
};


class Hero extends React.Component {
  render() {
    return (
      <div id="hero" className="hero section">
        <GreyBackgroundPart type="top" />
        <div className="grey-background">
          <div className="hero-content section-content">
            <div className="two-cols">
              <div className="hero-left left">
                <h1>OIL - fuel for your consent management.</h1>
                <p>OIL is a holistic consent management platform that enables your compliance with GDPR and ePrivacy.
                  It is open-source, based on the IAB TCF Standard and is currently being developed by a collaboration of international publishers. </p>

                <HeroButton text="Sandbox" cssClass="light-blue-design" href="https://sandbox.oiljs.org/" />
                <HeroButton text="Github" cssClass="dark-blue-design" href="https://github.com/as-ideas/oil" />
                <CollaborateLink/>
              </div>
              <div className="hero-right right">
                <img src={require('./mutli-devices.png')}/>
              </div>
            </div>
          </div>
        </div>
        <GreyBackgroundPart type="bottom" />
      </div>
    )
  }
}

export default Hero;
