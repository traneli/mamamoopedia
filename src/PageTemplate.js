import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './components/Header';
import Footer from './components/SocialMediaButtons'

// https://www.google.com/search?q=react+passing+props&oq=react+passing+props&aqs=chrome..69i57j0l5j0i22i30l4.339982j0j7&sourceid=chrome&ie=UTF-8
// https://www.google.com/search?q=react+change+css+based+on+props&oq=react+change+css+based+on+props&aqs=chrome..69i57j0i22i30l2j69i64.8786j0j7&sourceid=chrome&ie=UTF-8
// https://www.freecodecamp.org/news/react-change-inline-css-conditionally-based-on-component-state/

// class PageTemplate extends Component {
//   render() {
//     return (
//       <div>
//         <Header/>
//           {this.props.children}
//         <Footer/>
//       </div>
//     )
//   }
// }

// https://www.freecodecamp.org/news/react-context-in-5-minutes/
// https://robinvdvleuten.nl/blog/how-to-use-react-context/

class FooterHeader extends React.Component {

  redirectToHome = () => {
    const  { history } = this.props;
    if(history) history.push('/');
  }

  render() {
    const { history } = this.props;
    let footerStyleBrown = {
      background: '#9A6C57',
      width: '100%',
    };

    let footerStyleTransparent = {
      width: '100%',
    }

    return (
      <div>
        <Header/>
          {this.props.children}
        <footer style={footerStyleBrown}>
          <Footer/>
        </footer>
      </div>
    )
  }
}

const PageTemplate = MyComponent => {
  return class extends MyComponent {
    render() {
      // if (this.props.)
      return (
        <MyComponent {...this.props} />
      )
    }
  }
}

export default PageTemplate(FooterHeader);