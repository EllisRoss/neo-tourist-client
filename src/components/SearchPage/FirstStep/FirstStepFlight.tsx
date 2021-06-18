import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectFlights,
    selectIsFlightList,
} from "../../../redux/selectors/searchFlightSelectors";
import {SearchFlightForm} from "./SearchFlightForm/SearchFlightForm";
import {FlightItem} from "./FlightItem/FlightItem";
import {flightAndHotelActions} from "../../../redux/searchFlightAndHotelReducer";




export const FirstStepFlight: React.FC = React.memo(() => {

    const isFlightList = useSelector(selectIsFlightList);
    let flights = useSelector(selectFlights);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(flightAndHotelActions.setStepValue(1))
    })

    let flightsList = flights.map(flight => {
        let id = `${flight.there.id}_${flight.back.id}`;
        return <FlightItem key={id} there={flight.there} back={flight.back} />
    })


    return (
        <div>
            <SearchFlightForm />

            {isFlightList && flightsList}
        </div>
    );
})
