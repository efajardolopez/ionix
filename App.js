import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View } from "react-native";
import styles from "./src/pages/styles";
import Slide from "./src/pages/slides";
import Home from "./src/pages/home";

// export default function App() {
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHome: false,
    };
  }

  onClose = () => {
    this.setState({ showHome: true });
  };

  render() {
    const { showHome } = this.state;

    return showHome ? (
      <View style={styles.container}>
        <Home></Home>
        {/* <StatusBar style="auto" /> */}
      </View>
    ) : (
      <Slide closeSlide={this.onClose}></Slide>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
