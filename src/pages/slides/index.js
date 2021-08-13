import React, { Component } from "react";
import { Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import LinearGradientButton from "../../components/LinearGradientButton";
import slides from "../../constants/slides";
import styles from "../styles";

class Slide extends Component {
  // constructor(props) {
  //   super(props);
  // }

  onClick() {
    console.warn("click");
  }

  _renderSlide = ({ item }) => {
    return (
      <View style={{ top: "40%" }}>
        <Text style={styles.titleSlide}>{item.title}</Text>
        <Text style={styles.descriptionSlide}>{item.description}</Text>
        <LinearGradientButton title="Enable" onClick={this.onClick} />
      </View>
    );
  };

  // closeSlide = () => {
  //   const { closeSlide } = this.props;
  //   console.warn("terminalo");
  //   closeSlide();
  // };

  render() {
    const { closeSlide } = this.props;
    return (
      <AppIntroSlider
        renderItem={this._renderSlide}
        data={slides}
        onDone={closeSlide}
      ></AppIntroSlider>
    );
  }
}

export default Slide;
