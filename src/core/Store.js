import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers,);

store.subscribe(() => {
});

export default store;