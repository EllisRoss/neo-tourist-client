import {AppStateType} from "../store";
import {TwoSideFlight} from "../../types/types";

export const selectFlights = (state: AppStateType): Array<TwoSideFlight> => {
    return state.searchFlightPage.flights;
}

export const selectPassengers = (state: AppStateType): number => {
    return state.searchFlightPage.passengers;
}

export const selectIsFlightList = (state: AppStateType): boolean => {
    return state.searchFlightPage.isFlightsList;
}

export const selectFlightPageSize = (state: AppStateType): number => {
    return state.searchFlightPage.pageSize;
}
export const selectFlightCurrentPage = (state: AppStateType): number => {
    return state.searchFlightPage.currentPage;
}



