import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "../redux/reducers/AuthReducer";
import MessageReducer from "../redux/reducers/MessageReducer";
import ChatReducer from "../redux/reducers/ChatReducer";
import ThemeReducer from "./reducers/ThemeReducer";
import UtilsReducer from "./reducers/UtilsReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  message: MessageReducer,
  chat: ChatReducer,
  theme: ThemeReducer,
  utils: UtilsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
