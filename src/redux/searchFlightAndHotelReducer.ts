import {InferActionTypes} from "./store";
import {SelectedHotel, StepType, TwoSideFlight} from "../types/types";

const SET_SELECTED_FLIGHT = 'neoTourist/searchFlightAndHotelReducer/SET_SELECTED_FLIGHT';
const SET_SELECTED_HOTEL = 'neoTourist/searchFlightAndHotelReducer/SET_SELECTED_HOTEL';
const TOGGLE_IS_FLIGHT_SELECTED = 'neoTourist/searchFlightAndHotelReducer/TOGGLE_IS_FLIGHT_SELECTED';
const TOGGLE_IS_HOTEL_SELECTED = 'neoTourist/searchFlightAndHotelReducer/TOGGLE_IS_HOTEL_SELECTED';
const SET_STEP_VALUE = 'neoTourist/searchFlightAndHotelReducer/SET_STEP_VALUE';

let initialState = {
    selectedFlight: null as null | TwoSideFlight,
    selectedHotel: null as null | SelectedHotel,
    isHotelSelected: false,
    isFlightSelected: false,
    step: 1 as StepType,
}

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof flightAndHotelActions>

const searchFlightAndHotelReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_SELECTED_FLIGHT:
            return setSelectedFlight(state, action.selectedFlight);
        case SET_SELECTED_HOTEL:
            return setSelectedHotel(state, action.selectedHotel);
        case TOGGLE_IS_FLIGHT_SELECTED:
            return toggleIsFlightSelected(state, action.toggleVal);
        case TOGGLE_IS_HOTEL_SELECTED:
            return toggleIsHotelSelected(state, action.toggleVal);
        case SET_STEP_VALUE:
            return setStepValue(state, action.step);
        default:
            return state;
    }
}

const setStepValue = (state: InitialStateType, step: StepType) => {
    return {
        ...state,
        step: step,
    }
}

const toggleIsFlightSelected = (state: InitialStateType, toggleVal: boolean) => {
    return {
        ...state,
        isFlightSelected: toggleVal,
    }
}
const toggleIsHotelSelected = (state: InitialStateType, toggleVal: boolean) => {
    return {
        ...state,
        isHotelSelected: toggleVal,
    }
}

const setSelectedFlight = (state: InitialStateType, selectedFlight: TwoSideFlight) => {
    return {
        ...state,
        selectedFlight: selectedFlight,
    }
}
const setSelectedHotel = (state: InitialStateType, selectedHotel: SelectedHotel) => {
    return {
        ...state,
        selectedHotel: selectedHotel,
    }
}

export const flightAndHotelActions = {
    setSelectedFlight: (selectedFlight: TwoSideFlight) => ({type: SET_SELECTED_FLIGHT, selectedFlight} as const),
    setSelectedHotel: (selectedHotel: SelectedHotel) => ({type: SET_SELECTED_HOTEL, selectedHotel} as const),
    toggleIsFlightSelected: (toggleVal: boolean) => ({type: TOGGLE_IS_FLIGHT_SELECTED, toggleVal} as const),
    toggleIsHotelSelected: (toggleVal: boolean) => ({type: TOGGLE_IS_HOTEL_SELECTED, toggleVal} as const),
    setStepValue: (step: StepType) => ({type: SET_STEP_VALUE, step} as const),
}

export default searchFlightAndHotelReducer;
