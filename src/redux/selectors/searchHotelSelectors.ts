import {AppStateType} from "../store";
import {Hotel, HotelFilterType, HotelQueryType} from "../../types/types";

export const selectHotels = (state: AppStateType): Array<Hotel> => {
    return state.searchHotelPage.hotels;
}
export const selectIsHotelList = (state: AppStateType): boolean => {
    return state.searchHotelPage.isHotelsList;
}
export const selectVacationDuration = (state: AppStateType): number | null => {
    return state.searchHotelPage.vacationDuration;
}
export const selectFilter = (state: AppStateType): HotelFilterType => {
    return state.searchHotelPage.hotelFilter;
}
export const selectHotelQuery = (state: AppStateType): HotelQueryType | null => {
    return state.searchHotelPage.hotelQuery;
}
export const selectPageSize = (state: AppStateType): number => {
    return state.searchHotelPage.pageSize;
}
export const selectCurrentPage = (state: AppStateType): number => {
    return state.searchHotelPage.currentPage;
}
