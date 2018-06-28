import React from "react";

require('./collaborate-link.scss');


class CollaborateLink extends React.Component {
  render() {
    return (
      <a href="" target="_blank" className="collaborate-link">Collaborate with us <img src={require('./arrow.svg')}/></a>
    )
  }
}

export default CollaborateLink;
