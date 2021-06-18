import {TwoSideFlight} from "../types/types";
import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction} from "redux-thunk";
import {SearchFlightFormData} from "../components/SearchPage/FirstStep/SearchFlightForm/SearchFlightForm";
import {flightAPI} from "../api/api";

const SET_FLIGHTS = 'neoTourist/searchPageReducer/SET_FLIGHTS';
const SET_PASSENGERS = 'neoTourist/searchPageReducer/SET_PASSENGERS';
const TOGGLE_IS_FLIGHTS_LIST = 'neoTourist/searchPageReducer/IS_FLIGHTS_LIST';

let initialState = {
    flights: [] as Array<TwoSideFlight>,
    passengers: 1,
    isFlightsList: false,
    pageSize: 10,
    currentPage: 1,
}

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof searchFlightsActions>

const searchFlightReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_FLIGHTS:
            return setFlights(state, action.flights);
        case SET_PASSENGERS:
            return setPassengers(state, action.passengers);
        case TOGGLE_IS_FLIGHTS_LIST:
            return toggleIsFlights(state, action.toggleVal);
        default:
            return state;
    }
}

const toggleIsFlights = (state: InitialStateType, toggleVal: boolean) => {
    return {
        ...state,
        isFlightsList: toggleVal
    }
}
const setFlights = (state: InitialStateType, flights: Array<TwoSideFlight>) => {
    return {
        ...state,
        flights: [...flights]
    }
}

const setPassengers = (state: InitialStateType, passengers: number) => {
    return {
        ...state,
        passengers: passengers,
    }
}


export const searchFlightsActions = {
    setFlights: (flights: Array<TwoSideFlight>) => ({type: SET_FLIGHTS, flights} as const),
    setPassengers: (passengers: number) => ({type: SET_PASSENGERS, passengers} as const),
    toggleIsFlights: (toggleVal: boolean) => ({type: TOGGLE_IS_FLIGHTS_LIST, toggleVal} as const),
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const getFlightsThunkCreator = (formData: SearchFlightFormData): ThunkType =>
    async (dispatch) => {
        dispatch(searchFlightsActions.toggleIsFlights(false));
        let response = await flightAPI.getFlights(formData);
        if (response.resultCode === 0) {
            dispatch(searchFlightsActions.setFlights(response.flights));
            dispatch(searchFlightsActions.toggleIsFlights(true));
        }
    }

export default searchFlightReducer;
