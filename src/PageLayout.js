import React from 'react';
import { withRouter, useLocation } from 'react-router';

import Header from './components/Header';
import Footer from './components/SocialMediaButtons';
import { MainTextConsumer } from './hoc/context/MainContext';

// https://stackoverflow.com/questions/60657503/react-context

function Layout(children) {

  let location = useLocation();
  console.log(location);

  return (
    <MainTextConsumer>
    <div>
      <Header/>
          {value => (
            <>
              {value}
            </>
          )}
        {children}
      <Footer/>
    </div>
    </MainTextConsumer>
  )
}

export default Layout;