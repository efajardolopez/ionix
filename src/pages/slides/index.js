import React, { Component } from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import slides from "../../constants/slides";
import { setPermissions } from "../../actions/config";
import { connect } from "react-redux";
import Item from "./components/item";

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
      Alert.alert(error.message);
    }
  };

  _nextSlide = (key) => {
    const { setPermissions } = this.props;
    let i = ++key;
    if (i >= slides.length) {
      setPermissions(true);
    } else {
      this.slider.goToSlide(key++, true);
    }
  };

  _renderSlide = ({ item }) => {
    return (
      <Item
        key={item.key}
        item={item}
        requestPermission={() => this.requestPermission(item)}
        nextSlide={() => this._nextSlide(item.key)}
      />
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderSlide}
        data={slides}
        showNextButton={false}
        showSkipButton={false}
        showDoneButton={false}
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
