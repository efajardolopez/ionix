import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  RefreshControl,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import SearchInput from "../../components/SearchInput";
import styles from "../styles";
import api_memes from "../../services/resources/memes";
import NoResults from "../../components/NoResults";
import { IMAGE, SHITPOSTING } from "../../constants";
import { connect } from "react-redux";
import { setPermissions } from "../../actions/config";
import Loading from "../../components/Loading";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      after: "",
      fetching: true,
      fetching_bottom: false,
    };
  }

  componentDidMount() {
    this.fetchMemes();
  }

  filterMemes(memes) {
    return memes.filter((meme) => {
      return (
        meme.data.post_hint === IMAGE &&
        meme.data.link_flair_text === SHITPOSTING
      );
    });
  }

  fetchMemes(search = "", after = "", concat = false) {
    let { memes } = this.state;
    api_memes.getMemes(search, after).then((response) => {
      const { children, after } = response.data;
      let results = this.filterMemes(children);
      let data = results.map((result) => {
        return result.data;
      });

      if (concat) {
        this.setState({ memes: memes.concat(data) });
      } else {
        this.setState({ memes: data });
      }

      this.setState({
        fetching: false,
        fetching_bottom: false,
        after,
      });
    });
  }

  isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20
    );
  }

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
    const { memes, fetching, fetching_bottom, after } = this.state;
    const { setPermissions } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ marginTop: 35, marginStart: 20 }}>
          <TouchableOpacity
            underlayColor="#DDDDDD"
            onPress={() => setPermissions(false)}
          >
            <Image source={require("../../assets/img/engine.png")} />
          </TouchableOpacity>
        </View>
        <SearchInput
          placeholder="Search"
          onChange={(text) => {
            this.setState({ fetching: true });
            this.fetchMemes(text);
          }}
        ></SearchInput>

        {memes.length ? (
          <ScrollView
            style={{ flex: 1 }}
            ref={(ref) => (this._scrollView = ref)}
            onScrollBeginDrag={Keyboard.dismiss}
            onScroll={({ nativeEvent }) => {
              if (this.isCloseToBottom(nativeEvent)) {
                this.setState({ fetching_bottom: true });
                this.fetchMemes("", after, true);
              }
            }}
            scrollEventThrottle={500}
            refreshControl={
              <RefreshControl
                refreshing={fetching}
                onRefresh={() => {
                  this.setState({ fetching: true });
                  this.fetchMemes();
                }}
              />
            }
          >
            <View style={{ flex: 1, paddingStart: 20, paddingEnd: 20 }}>
              {memes.map((meme, index) => {
                return this._renderItem(meme, index);
              })}
            </View>
            {fetching_bottom ? <Loading /> : null}
          </ScrollView>
        ) : (
          <NoResults />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  permissions_settings: state.configReducer.permissions_settings,
});

const mapDispatchToProps = (dispatch) => ({
  setPermissions: (data) => dispatch(setPermissions(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
