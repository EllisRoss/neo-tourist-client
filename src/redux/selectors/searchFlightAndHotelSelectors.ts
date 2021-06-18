import {AppStateType} from "../store";
import {SelectedHotel, StepType, TwoSideFlight} from "../../types/types";

export const selectIsHotelSelected = (state: AppStateType): boolean => {
    return state.hotelAndFlightPage.isHotelSelected;
}

export const selectIsFlightSelected = (state: AppStateType): boolean => {
    return state.hotelAndFlightPage.isFlightSelected;
}

export const selectSelectedFlight = (state: AppStateType): TwoSideFlight | null => {
    return state.hotelAndFlightPage.selectedFlight;
}

export const selectSelectedHotel = (state: AppStateType): SelectedHotel | null => {
    return state.hotelAndFlightPage.selectedHotel;
}

export const selectStepValue = (state: AppStateType): StepType => {
    return state.hotelAndFlightPage.step;
}
