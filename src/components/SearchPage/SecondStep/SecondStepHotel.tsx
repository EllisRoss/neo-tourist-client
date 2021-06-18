import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { BookingHotel } from "./BookingHotel/BookingHotel";
import {selectIsHotelList} from "../../../redux/selectors/searchHotelSelectors";
import {flightAndHotelActions} from "../../../redux/searchFlightAndHotelReducer";
import {SortPanel} from "./SortPanel/SortPanel";


export const SecondStepHotel: React.FC = React.memo(() => {

    const isHotelList = useSelector(selectIsHotelList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(flightAndHotelActions.setStepValue(2))
    }, [])

    return (
        <div>
            <SortPanel />
            { isHotelList && <BookingHotel /> }
        </div>
    );
})
