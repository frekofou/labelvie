// Dependencies
import React, { Component } from "react";
import { Provider } from "react-redux";
import SecurityService from "./security/SecurityService";

// Components
import AppContainer from "./AppContainer";

// Redux
import store from "./redux/store";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    let user = await SecurityService.getUser();
    await SecurityService.setAuthorization();
    this.setState({ user: user });
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer
          user={this.state.user}
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </Provider>
    );
  }
}
