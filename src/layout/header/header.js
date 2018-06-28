import React from "react";

require('./header.scss');

const MenuEntry = ({link, text}) => {
  return <a className="menu-entry" href={link}>
    {text}
  </a>
};

const MenuButton = ({text, cssClass}) => {
  return <a className={"menu-button " + cssClass}>
    {text}
  </a>
};

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-logo">
            <div className="header-logo__image">
              <img src={require('./logo.svg')}/>
            </div>
            <div className="header-logo__text">
              oil.js
            </div>
          </div>
          <div className="header-menu">
            <MenuEntry text="Product" link="#"/>
            <MenuEntry text="Developer" link="#"/>
            <MenuEntry text="Collaboration" link="#"/>
            <MenuEntry text="Support" link="#"/>
            <MenuEntry text="About us" link="#"/>

            <MenuButton text="Sandbox" cssClass="blue-design"/>
            <MenuButton text="Github"/>
          </div>
        </div>
        <div className="header__divider"/>
      </div>
    )
  }
}

export default Header
