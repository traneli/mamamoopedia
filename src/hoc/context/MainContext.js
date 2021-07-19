import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

//const MainContext = React.createContext();

class MainContext extends Component {
  state = {
    background: "color"
  };

  toggleBackground = () => {
    this.setState(prevState => {
      return {
        background: prevState.background === "color" ? "transparent" : "color"
      };
    })
  }

  render() {
    return (
      <Provider 
        value={this.state.background}
      >
        {this.props.children}
      </Provider>  
    );
  }
}

//export default MainContext;
export { MainContext, Consumer as MainTextConsumer}