import React from "react";
import { Image, View, Text } from "react-native";
import styles from "../pages/styles";

const NoResults = () => {
  return (
    <View style={styles.NoResultsContainer}>
      <Image
        source={require("../assets/img/no-results.png")}
        style={{ marginBottom: 70 }}
      ></Image>
      <Text style={styles.NoResultsTitle}>No Results</Text>
      <Text style={styles.NoResultsDescription}>
        Sorry, there are no results for this search. Please try another phrase
      </Text>
    </View>
  );
};

export default NoResults;
