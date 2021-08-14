import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import LinearGradientButton from "../../components/LinearGradientButton";
import slides from "../../constants/slides";
import styles from "../styles";
import { setPermissions } from "../../actions/config";
import { connect } from "react-redux";

class Slide extends Component {
  requestPermission = async (item) => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(item.permission);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this._nextSlide(item.key);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  _nextSlide = (key) => {
    const { setPermissions } = this.props;
    let i = ++key;
    if (i >= slides.length) {
      // closeSlide();
      setPermissions(true);
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
        <LinearGradientButton
          title="Enable"
          onClick={() => this.requestPermission(item)}
        />
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
    // const { closeSlide } = this.props;
    return (
      <AppIntroSlider
        renderItem={this._renderSlide}
        data={slides}
        showNextButton={false}
        showSkipButton={false}
        showDoneButton={false}
        style={{ backgroundColor: "#fff" }}
        dotStyle={{ backgroundColor: "rgb(255,255,255)" }}
        activeDotStyle={{ backgroundColor: "rgb(255,255,255)" }}
        ref={(ref) => (this.slider = ref)}
      ></AppIntroSlider>
    );
  }
}

const mapStateToProps = (state) => ({
  permissions_settings: state.configReducer.permissions_settings,
});

const mapDispatchToProps = (dispatch) => ({
  setPermissions: (data) => dispatch(setPermissions(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
