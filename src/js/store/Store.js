import { createStore } from "redux";

import { ProdReducer } from "../reducers/Reducer";

const Store = createStore(
  ProdReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;
