import React, { Component } from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import styles from "./src/pages/styles";
import Slide from "./src/pages/slides";
import Home from "./src/pages/home";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { permissions_settings } = this.props;

    return permissions_settings ? (
      <View style={styles.container}>
        <Home></Home>
      </View>
    ) : (
      <Slide></Slide>
    );
  }
}

const mapStateToProps = (state) => ({
  permissions_settings: state.configReducer.permissions_settings,
});

export default connect(mapStateToProps)(App);
