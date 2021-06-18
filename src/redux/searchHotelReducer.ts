import {Hotel, HotelFilterType, HotelOptionsType, HotelQueryType} from "../types/types";
import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction} from "redux-thunk";
import {hotelsAPI} from "../api/api";

const SET_HOTELS = 'neoTourist/searchPageReducer/SET_HOTELS';
const TOGGLE_IS_HOTELS_LIST = 'neoTourist/searchPageReducer/IS_HOTELS_LIST';
const SET_HOTEL_QUERY = 'neoTourist/searchPageReducer/SET_HOTEL_QUERY';
const SET_HOTEL_FILTER = 'neoTourist/searchPageReducer/SET_HOTEL_FILTER';
const SET_HOTEL_OPTIONS = 'neoTourist/searchPageReducer/SET_HOTEL_OPTIONS';
const SET_VACATION_DURATION = 'neoTourist/searchPageReducer/SET_VACATION_DURATION';

let initialState = {
    hotels: [] as Array<Hotel>,
    hotelQuery: null as null | HotelQueryType,
    hotelFilter: {
        sortByUsersScore: false,
        sortByStars: false,
        sortByLowPrice: false,
    } as HotelFilterType,
    hotelOptions: null as null | HotelOptionsType,
    vacationDuration: null as null | number,
    pageSize: 10,
    currentPage: 1,
    isHotelsList: false,
}

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof searchHotelActions>

const searchHotelReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_HOTELS:
            return setHotels(state, action.hotels);
        case TOGGLE_IS_HOTELS_LIST:
            return toggleIsHotels(state, action.toggleVal);
        case SET_HOTEL_QUERY:
            return setHotelQuery(state, action.query);
        case SET_HOTEL_FILTER:
            return setHotelFilter(state, action.filter);
        case SET_HOTEL_OPTIONS:
            return setHotelOptions(state, action.options);
        case SET_VACATION_DURATION:
            return setVacationDuration(state, action.duration);
        default:
            return state;
    }
}

const toggleIsHotels = (state: InitialStateType, toggleVal: boolean) => {
    return {
        ...state,
        isHotelsList: toggleVal
    }
}
const setHotels = (state: InitialStateType, hotels: Array<Hotel>) => {
    return {
        ...state,
        hotels: [...hotels]
    }
}

const setHotelQuery = (state: InitialStateType, query: HotelQueryType) => {
    return {
        ...state,
        hotelQuery: query,
    }
}
const setHotelFilter = (state: InitialStateType, filter: HotelFilterType) => {
    return {
        ...state,
        hotelFilter: filter,
    }
}
const setHotelOptions = (state: InitialStateType, options: HotelOptionsType) => {
    return {
        ...state,
        hotelOptions: options,
    }
}

const setVacationDuration = (state: InitialStateType, duration: number) => {
    return {
        ...state,
        vacationDuration: duration,
    }
}

export const searchHotelActions = {
    setHotels: (hotels: Array<Hotel>) => ({ type: SET_HOTELS, hotels } as const),
    toggleIsHotels: (toggleVal: boolean) => ({ type: TOGGLE_IS_HOTELS_LIST, toggleVal } as const),
    setHotelQuery: (query: HotelQueryType) => ({ type: SET_HOTEL_QUERY, query } as const),
    setHotelFilter: (filter: HotelFilterType) => ({ type: SET_HOTEL_FILTER, filter } as const),
    setHotelOptions: (options: HotelOptionsType) => ({ type: SET_HOTEL_OPTIONS, options } as const),
    setVacationDuration: (duration: number) => ({ type: SET_VACATION_DURATION, duration } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const getHotelsThunkCreator = (hotelQuery: HotelQueryType, filter: HotelFilterType): ThunkType =>
    async (dispatch) => {
        dispatch(searchHotelActions.toggleIsHotels(false));
        let response = await hotelsAPI.getHotels(hotelQuery, filter);
        if (response.resultCode === 0) {
            dispatch(searchHotelActions.setHotels(response.hotels));
            dispatch(searchHotelActions.toggleIsHotels(true));
        }
    }
export default searchHotelReducer;
