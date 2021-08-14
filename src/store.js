import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducers from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducers);
const persistor = persistStore(store);

export { store, persistor };
