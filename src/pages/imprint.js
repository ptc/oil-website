import React from "react"
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import Imprint from '../layout/imprint/imprint';
import 'normalize.css';
import './../layout/app.scss';

export default () => {

  return <div>
    <Header/>

    <Imprint/>

    <Footer/>
  </div>
};
