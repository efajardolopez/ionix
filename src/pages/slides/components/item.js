import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import LinearGradientButton from "../../../components/LinearGradientButton";
import styles from "../../styles";

export default class Item extends Component {
  render() {
    const { item, nextSlide, requestPermission } = this.props;
    return (
      <View key={item.key} style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={item.image}
          style={{ marginBottom: 48, marginTop: "20%" }}
        ></Image>
        <Text style={styles.titleSlide}>{item.title}</Text>
        <Text style={styles.descriptionSlide}>{item.description}</Text>
        <LinearGradientButton
          title="Enable"
          onClick={() => requestPermission()}
        />
        <TouchableOpacity
          underlayColor="#DDDDDD"
          onPress={() => nextSlide(item.key)}
        >
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
