import React, { Component } from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
/**
 * Importamos librerías de redux para configurar a nivel global estado de la aplicación
 * Estados se persisten para evitar pérdida de estos al momento quitar la aplicación de background
 */
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import AppStack from "./App";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppStack />
        </PersistGate>
      </Provider>
    );
  }
}

registerRootComponent(App);
