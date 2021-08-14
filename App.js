import React, { Component } from "react";
import { render } from "react-dom";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import styles from "./src/pages/styles";
import Slide from "./src/pages/slides";
import Home from "./src/pages/home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHome: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  onClose = () => {
    this.setState({ showHome: true });
  };

  render() {
    const { showHome } = this.state;

    return showHome ? (
      <View style={styles.container}>
        <Home></Home>
      </View>
    ) : (
      <Slide closeSlide={this.onClose}></Slide>
    );
  }
}
