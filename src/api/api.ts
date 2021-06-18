import axios from "axios";
import {SearchFlightFormData} from "../components/SearchPage/FirstStep/SearchFlightForm/SearchFlightForm";
import {HotelFilterType, HotelQueryType} from "../types/types";

export const flightAPI = {
    getFlights: (formData: SearchFlightFormData) => {
        return axios.post('http://localhost:3001/search-flight', {formData})
            .then(response => response.data);
    }
}

export const hotelsAPI = {
    // props(city, guests, dates)
    getHotels: (hotelQuery: HotelQueryType, filter: HotelFilterType) => {
        return axios.post('http://localhost:3001/search-hotel', {hotelQuery, filter})
            .then(response => response.data);
    }
}
