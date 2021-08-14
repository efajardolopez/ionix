/**
 * Componente input de búsqueda
 * Se define como componente para reutilizarlo de manera rápida en nuevas pantallas
 */
import React from "react";
import PropTypes from 'prop-types';
import { TextInput, View, Image } from "react-native";
import styles from "../pages/styles";

const lens = require("../assets/img/lupa.png");

const SearchInput = (props) => {
    const { placeholder, onChange } = props;
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <Image source={lens} />
        </View>
        <TextInput
          placeholder={placeholder}
          style={styles.searchInput}
          onChangeText={(text) => onChange(text)}
          />
      </View>
    );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchInput;
