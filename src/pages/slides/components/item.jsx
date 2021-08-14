import React from "react";
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from "react-native";
import LinearGradientButton from "../../../components/LinearGradientButton";
import styles from "../../styles";

const Item = (props) => {
  const { item, nextSlide, requestPermission } = props;
  return (
    <View key={item.key} style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ marginBottom: 48, marginTop: "20%" }}
      />
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
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    image: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  nextSlide: PropTypes.func.isRequired,
  requestPermission: PropTypes.func.isRequired
}

export default Item;
