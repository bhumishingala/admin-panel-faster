import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { rootCounter } from "./reducer/Index";

export const configuerStore = () => {
    let store = createStore(rootCounter,applyMiddleware(thunk));

    return store;
}