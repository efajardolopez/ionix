import React, { Component } from "react";
import { View } from "react-native";

// Se utiliza librería externa que nos permite configurar de manera rápida y sencilla Splash de la app
import SplashScreen from "react-native-splash-screen";

/**
 * Importamos connect para obtener variable de redux que nos permite verificar si el usuario ya pasó inicialmente
 * por el slide de configuración de permisos
 */
import { connect } from "react-redux";

/**
 * Importamos vistas (componentes: Slide y Home)
 * Dadas las características de la prueba no es necesario implementar navegación (ya que son sólo 2 vistas)
 */
import Slide from "./src/pages/slides";
import Home from "./src/pages/home";
import styles from "./src/pages/styles";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Una vez cargado el Splash lo ocultamos cuando componente es cargado
    SplashScreen.hide();
  }

  render() {
    // Utilizamos variable del reducer Config para verificar su estado y cargar vista correspondiente
    const { permissions_settings } = this.props;

    return permissions_settings ? (
      <View style={styles.container}>
        <Home></Home>
      </View>
    ) : (
      <Slide></Slide>
    );
  }
}

// Seteamos al properties de nuestro componente la variable permissions_settings proveniente del ConfigReducer
const mapStateToProps = (state) => ({
  permissions_settings: state.configReducer.permissions_settings,
});

export default connect(mapStateToProps)(App);
