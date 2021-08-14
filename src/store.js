// Creación de Store, donde importamos el o los reducers necesarios y persistimos el estados de estos
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducers from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducers);
const persistor = persistStore(store);

// Exportamos variables store y persistor los cuales son utilizados en index
export { store, persistor };
