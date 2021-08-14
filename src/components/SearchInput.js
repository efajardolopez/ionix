import React, { Component } from "react";
import { TextInput, View, Image } from "react-native";
import styles from "../pages/styles";

export default class SearchInput extends Component {
  render() {
    const { placeholder, onChange } = this.props;
    return (
      <View style={styles.searchInput}>
        <View style={styles.lens}>
          <Image source={require("../assets/img/lupa.png")}></Image>
        </View>
        <TextInput
          placeholder={placeholder}
          style={{ fontSize: 19, color: "#636363" }}
          onChangeText={(text) => onChange(text)}
        ></TextInput>
      </View>
    );
  }
}
