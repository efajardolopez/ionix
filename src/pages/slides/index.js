import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
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

  _nextSlide = (key) => {
    const { closeSlide } = this.props;
    let i = ++key;
    if (i >= slides.length) {
      closeSlide();
    } else {
      this.slider.goToSlide(key++, true);
    }
  };

  _renderSlide = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={item.image}
          style={{ marginBottom: 48, marginTop: "20%" }}
        ></Image>
        <Text style={styles.titleSlide}>{item.title}</Text>
        <Text style={styles.descriptionSlide}>{item.description}</Text>
        <LinearGradientButton title="Enable" onClick={this.onClick} />
        <TouchableOpacity
          underlayColor="#DDDDDD"
          onPress={() => this._nextSlide(item.key)}
        >
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { closeSlide } = this.props;
    return (
      <AppIntroSlider
        renderItem={this._renderSlide}
        data={slides}
        onDone={closeSlide}
        showNextButton={false}
        showSkipButton={false}
        showDoneButton={false}
        ref={(ref) => (this.slider = ref)}
      ></AppIntroSlider>
    );
  }
}

export default Slide;
