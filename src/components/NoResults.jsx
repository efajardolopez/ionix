/**
 * Componente búsqueda sin resultado
 * Se define como componente para reutilizarlo de manera rápida en nuevas pantallas
 */
import React from "react";
import { Image, View, Text } from "react-native";
import styles from "../pages/styles";

const photo = require("../assets/img/no-results.png");

const NoResults = () => (
  <View style={styles.NoResultsContainer}>
    <Image
      source={photo}
      style={{ marginBottom: 70 }}
     />
    <Text style={styles.NoResultsTitle}>No Results</Text>
    <Text style={styles.NoResultsDescription}>
      Sorry, there are no results for this search. Please try another phrase
    </Text>
  </View>
);

export default NoResults;
