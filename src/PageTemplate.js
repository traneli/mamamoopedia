import React, { Component } from 'react';
import { withRouter, useLocation } from 'react-router';
import Header from './components/Header';
import Footer from './components/SocialMediaButtons';

const PageTemplate = ({children}) =>{
  return(
      <>
      <div class="about-container">
        <Header/>
        {children}
      </div>
      </>
  )
}

export default PageTemplate;