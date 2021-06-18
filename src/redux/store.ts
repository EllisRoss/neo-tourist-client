import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import searchFlightReducer from "./searchFlightReducer";
import searchHotelReducer from "./searchHotelReducer";
import searchFlightAndHotelReducer from "./searchFlightAndHotelReducer";

let rootReducer = combineReducers({
    searchFlightPage: searchFlightReducer,
    searchHotelPage: searchHotelReducer,
    hotelAndFlightPage: searchFlightAndHotelReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
));

export default store;
