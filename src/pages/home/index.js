import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  ScrollView,
  Text,
  View,
  Image,
  RefreshControl,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import SearchInput from "../../components/SearchInput";
import styles from "../styles";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [
        {
          key: 1,
          url: "https://i.redd.it/hc6r5afpwqg71.jpg",
          title: "Año 3000 y esta socia aún no puede ganar el rosco",
          score: 32,
          num_comments: 45,
        },
        {
          key: 2,
          url: "https://i.redd.it/0kxa1ep2d0h71.jpg",
          title: "Año 3000 y esta socia aún no puede ganar el rosco",
          score: 9,
          num_comments: 10,
        },
        {
          key: 3,
          url: "https://i.redd.it/0kxa1ep2d0h71.jpg",
          title: "Año 3000 y esta socia aún no puede ganar el rosco",
          score: 9,
          num_comments: 10,
        },
        {
          key: 4,
          url: "https://i.redd.it/0kxa1ep2d0h71.jpg",
          title: "Año 3000 y esta socia aún no puede ganar el rosco",
          score: 9,
          num_comments: 10,
        },
        {
          key: 5,
          url: "https://i.redd.it/0kxa1ep2d0h71.jpg",
          title: "Año 3000 y esta socia aún no puede ganar el rosco",
          score: 9,
          num_comments: 10,
        },
      ],
    };
  }

  componentDidMount() {}

  _renderItem(item, index) {
    return (
      <View key={index} style={[styles.memeContainer, { padding: 0 }]}>
        <Image source={{ uri: item.url }} style={styles.memeImage}></Image>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={require("../../assets/img/arrow-up.png")}></Image>
            <Text style={styles.memeScore}>{item.score}</Text>
            <Image source={require("../../assets/img/arrow-down.png")}></Image>
          </View>
          <View style={{ flex: 5 }}>
            <Text style={styles.memeTitle}>{item.title}</Text>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              {/* <Icon name="comment" type="evilicon" color="#517fa4" size={18} /> */}
              <Image source={require("../../assets/img/comments.png")}></Image>
              <Text style={[styles.memeNumComments, { flex: 1 }]}>
                {item.num_comments}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { memes } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 20, marginStart: 20 }}>
          <Image source={require("../../assets/img/engine.png")} />
        </View>
        <SearchInput placeholder="Search"></SearchInput>
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={console.warn("loading")}
            />
          }
        >
          <View style={{ flex: 1, paddingStart: 20, paddingEnd: 20 }}>
            {memes.map((meme, index) => {
              return this._renderItem(meme, index);
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default index;
