import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import SearchInput from "../../components/SearchInput";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View>
        <SearchInput></SearchInput>
        <ScrollView>
          <Text>Home</Text>
        </ScrollView>
      </View>
    );
  }
}

export default index;
