import React from "react";

class LinkButton extends React.Component {
  render() {
    return (
        <a className={this.props.cssClass} href={this.props.href} target="_blank">
        {this.props.text}
      </a>
    )
  }
};

export default LinkButton;
