/**
 * Componente boton con efecto de degrade.
 * Se define como componente para reutilizarlo de manera rápida en nuevas pantallas
 */

import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "../pages/styles";

export default class LinearGradientButton extends Component {
  onPress = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { title, onClick } = this.props;
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 1]}
            style={styles.gradient}
            colors={["#FF8960", "#FF62A5"]}
          >
            <Text style={styles.buttonText}>{title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
