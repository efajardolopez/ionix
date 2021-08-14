import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "../../styles";

const img_path = "../../../assets/img/";

export default class Item extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <View key={index} style={[styles.memeContainer, { padding: 0 }]}>
        <Image source={{ uri: item.url }} style={styles.memeImage}></Image>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={require(img_path + "arrow-up.png")}></Image>
            <Text style={styles.memeScore}>{item.score}</Text>
            <Image source={require(img_path + "arrow-down.png")}></Image>
          </View>
          <View style={{ flex: 5 }}>
            <Text style={styles.memeTitle}>{item.title}</Text>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <Image source={require(img_path + "comments.png")}></Image>
              <Text style={[styles.memeNumComments, { flex: 1 }]}>
                {item.num_comments}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
