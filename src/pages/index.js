import React from "react"
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import Hero from '../layout/hero/hero';

import 'normalize.css';
import './../layout/app.scss';
import Product from '../layout/product/product';
import Features from '../layout/features/features';
import Faq from '../layout/faq/faq';
import Collaboration from '../layout/collaboration/collaboration';
import Support from '../layout/support/support';
import AboutUs from '../layout/aboutus/aboutus';
import Press from '../layout/press/press';

export default ({data}) => {
  return <div>
    <Header/>

    <Hero/>
    <Product/>
    <Features/>
    <Collaboration/>
    <Faq entries={data.allMarkdownRemark.edges}/>
    <Support/>
    <AboutUs/>
    <Press/>

    <Footer/>
  </div>
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
