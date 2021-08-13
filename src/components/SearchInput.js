import React, { Component } from "react";
import { TextInput, View } from "react-native";

export default class SearchInput extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <View>
        <TextInput placeholder={placeholder}></TextInput>
      </View>
    );
  }
}
