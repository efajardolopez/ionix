import React, { Component } from "react";
import { TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../pages/styles";

export default class SearchInput extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <View style={styles.searchInput}>
        <View style={styles.viewIcon}>
          <Icon name="search" color={"#636363"}></Icon>
        </View>
        <TextInput
          placeholder={placeholder}
          style={{ fontSize: 19 }}
        ></TextInput>
      </View>
    );
  }
}
