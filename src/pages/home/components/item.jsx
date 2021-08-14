import React from "react";
import PropTypes from 'prop-types';
import { View, Image, Text } from "react-native";
import styles from "../../styles";

const CommentIcon = require("../../../assets/img/comments.png");
const ArrowUpIcon = require("../../../assets/img/arrow-up.png");
const ArrowDownIcon = require("../../../assets/img/arrow-down.png");

const Item = (props) => {
  const { item, index } = props;
  return (
    <View key={index} style={[styles.memeContainer, { padding: 0 }]}>
      <Image source={{ uri: item.url }} style={styles.memeImage}/>
      <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image source={ArrowUpIcon}/>
          <Text style={styles.memeScore}>{item.score}</Text>
          <Image source={ArrowDownIcon}/>
        </View>
        <View style={{ flex: 5 }}>
          <Text style={styles.memeTitle}>{item.title}</Text>
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
            <Image source={CommentIcon}/>
            <Text style={[styles.memeNumComments, { flex: 1 }]}>
              {item.num_comments}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

Item.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    num_comments: PropTypes.number.isRequired
  }).isRequired
}

export default Item;
