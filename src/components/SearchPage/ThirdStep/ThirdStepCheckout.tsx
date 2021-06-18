import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FlightItem} from "../FirstStep/FlightItem/FlightItem";
import {RoomItem} from "../SecondStep/BookingHotel/HotelItem/RoomItem/RoomItem";
import styles from "./ThirdStepCheckout.module.css"
import {
    selectSelectedFlight,
    selectSelectedHotel
} from "../../../redux/selectors/searchFlightAndHotelSelectors";
import {flightAndHotelActions} from "../../../redux/searchFlightAndHotelReducer";
import {selectVacationDuration} from "../../../redux/selectors/searchHotelSelectors";


export const ThirdStepCheckout: React.FC = React.memo(() => {

    const selectedFlight = useSelector(selectSelectedFlight);
    const selectedHotel = useSelector(selectSelectedHotel);
    const vacationDuration = useSelector(selectVacationDuration);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(flightAndHotelActions.setStepValue(3))
    }, []);

    let totalPrice = null as null | number;
    if (selectedHotel && selectedFlight && vacationDuration) {
        totalPrice = (selectedHotel.room.price * vacationDuration) + selectedFlight.there.price + selectedFlight.back.price;
    }

    return (
        <div>
            {
                totalPrice && <div className={styles.totalPrice}><b>Total price:</b> { totalPrice } &#8381;</div>
            }

            {
                selectedFlight &&
                <div className={styles.flight}>
                    <p className={styles.heading}><b>Flight</b></p>
                    <FlightItem there={selectedFlight.there} back={selectedFlight.back}/>
                </div>
            }

            {
                selectedHotel &&
                <div className={styles.hotel}>
                    <p className={styles.heading}><b>Hotel</b></p>
                    <div className={styles.hotelName}>{selectedHotel.hotel.name}</div>
                    {/*<Image width={300} src={selectedHotel.hotel.photo}/>*/}
                    <RoomItem hotel={selectedHotel.hotel} room={selectedHotel.room}/>
                </div>
            }
        </div>
    );
});
