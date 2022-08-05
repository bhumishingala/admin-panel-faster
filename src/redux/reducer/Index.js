import { combineReducers } from "redux";
import { productsreducer } from "./Product_reducer";


export const rootCounter  = combineReducers ({
    products : productsreducer,
})