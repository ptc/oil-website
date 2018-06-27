import React from "react";

require('./header.scss');

const MenuEntry = () => {
    <a className="menu-entry" href={props.link}>
        {props.text}
    </a>
}

const MenuButton = () => {
    <a className={"menu-button " + "." + props.cssClass}>
        {props.text}
    </a>
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
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
                    <MenuEntry text="Xyz" link="#"/>

                    <MenuButton text="" cssClass="blue-design"/>
                </div>
            </div>
        )
    }
}

export default Header