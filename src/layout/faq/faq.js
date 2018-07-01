import React from "react";

require('./faq.scss');

class FaqEntry extends React.Component {
  constructor() {
    super();
    this.state = {expanded: false}
  }

  toggle() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    let currentClass = this.state.expanded ? "expanded" : "hidden";
    return <div className="faq-entry" onClick={this.toggle.bind(this)}>
      <div className="faq-entry__question">
        <div className="faq-entry-text">
          {this.props.post.frontmatter.title}
        </div>
        <div className="faq-entry-expander">
          <div className="faq-entry-round-expander"></div>
        </div>
      </div>
      <div className={"faq-entry__content " + currentClass} dangerouslySetInnerHTML={{__html: this.props.post.html}}/>
    </div>
  }
}

class Faq extends React.Component {

  render() {
    return (
      <div className="faq section">
        <div className="faq-content section-content">
          <div className="faq-titles">
            <h6>SUPPORT</h6>
            <h2>Frequently Asked Questions</h2>
            <p>Want to know more about OIL before becoming an active collaborator?<br/>
              In that case, please sign up to our weekly webinar!</p>
          </div>
          {this.props.entries.map(edge => <FaqEntry key={edge.node.id} post={edge.node}/>)}
        </div>
      </div>
    )
  }
}


//
//


// export const pageQuery = graphql`
// query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             path
//             title
//           }
//         }
//       }
//     }
//   }
// `;
export default Faq;
