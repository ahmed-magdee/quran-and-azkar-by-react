import { applyMiddleware, combineReducers, createStore } from "redux";
import tafsiratReducer from "../redux/fafsirQuran/tafsirReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  tafsir: tafsiratReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
