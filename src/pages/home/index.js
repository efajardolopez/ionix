import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  Image,
  RefreshControl,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import SearchInput from "../../components/SearchInput";

// Servicio Rest para obtener listado de memes
import apiMemes from "../../services/resources/memes";

// Componente de no resultado
import NoResults from "../../components/NoResults";
// Constantes para filtrar resultados
import { IMAGE, SHITPOSTING } from "../../constants";

// Import de action para copiarlo en las properties de nuestro componente y poder utilizarlo
import { setPermissions } from "../../actions/config";

// Componente de loading
import Loading from "../../components/Loading";

// Componente interno de la vista Home: detalle de memes
import Item from "./components/item";

const engineIcon = require("../../assets/img/engine.png");

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      after: "",
      fetching: true,
      fetchingBottom: false,
    };
  }

  componentDidMount() {
    this.fetchMemes();
  }

  componentWillUnmount() {}

  /**
   *
   * Función encargada de filtrar resultados en base a post_hint y link_flair_text indicados en test
   * @param {*} memes
   * @returns
   * @memberof index
   */
  filterMemes = (memes) => {
    return memes.filter(
      (meme) =>
        meme.data.post_hint === IMAGE &&
        meme.data.link_flair_text === SHITPOSTING
    );
  };

  fetchMemes(search = "", afterFilter = "", concat = false) {
    const { memes } = this.state;
    apiMemes.getMemes(search, afterFilter).then((response) => {
      const { children, after } = response.data;
      const results = this.filterMemes(children);
      const data = results.map((result) => result.data);

      /**
       * Para la paginación solicitada se implementó un Scroll infinito cuya funcionalidad es ir concatenando
       * los nuevos resultados a partir de la búsqueda por el campo after
       */

      if (concat) {
        this.setState({ memes: memes.concat(data) });
      } else {
        this.setState({ memes: data });
      }

      this.setState({
        fetching: false,
        fetchingBottom: false,
        after,
      });
    });
  }

  /**
   *
   * Función que permitirá gatillar en el componente ScrollView una llamada al servicio rest (siguiente página)
   * @param {*} { layoutMeasurement, contentOffset, contentSize }
   * @returns
   * @memberof index
   */
  isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20
    );
  }

  _renderItem(item, index) {
    return <Item key={index} item={item} index={index} />;
  }

  render() {
    const { memes, fetching, fetchingBottom, after } = this.state;
    const { setPermissions } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ marginTop: 35, marginStart: 20 }}>
          <TouchableOpacity
            underlayColor="#DDDDDD"
            onPress={() => setPermissions(false)}
          >
            <Image source={engineIcon} />
          </TouchableOpacity>
        </View>
        <SearchInput
          testID="searchInput"
          placeholder="Search"
          onChange={(text) => {
            this.setState({ fetching: true });
            this.fetchMemes(text);
          }}
        />

        {memes.length ? (
          <ScrollView
            style={{ flex: 1 }}
            ref={(ref) => (this._scrollView = ref)}
            onScrollBeginDrag={Keyboard.dismiss}
            onScroll={({ nativeEvent }) => {
              if (this.isCloseToBottom(nativeEvent)) {
                this.setState({ fetchingBottom: true });
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
              {memes.map((meme, index) => this._renderItem(meme, index))}
            </View>
            {fetchingBottom ? <Loading /> : null}
          </ScrollView>
        ) : !fetching ? (
          <NoResults />
        ) : (
          <Loading />
        )}
      </View>
    );
  }
}

index.propTypes = {
  setPermissions: PropTypes.func.isRequired,
};

/**
 * Definición de estado en properties de nuestro componente
 */
const mapStateToProps = (state) => ({
  permissions_settings: state.configReducer.permissions_settings,
});

/**
 * Definición de función (action) en properties de nuestro componente
 */
const mapDispatchToProps = (dispatch) => ({
  setPermissions: (data) => dispatch(setPermissions(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
