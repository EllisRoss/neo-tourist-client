import React from 'react';
import {useSelector} from "react-redux";
import {HotelItem} from "./HotelItem/HotelItem";
import {selectHotels} from "../../../../redux/selectors/searchHotelSelectors";

export const BookingHotel: React.FC = React.memo(() => {

    let hotels = useSelector(selectHotels);
    let hotelList = hotels.map((hotel) => {
        return <HotelItem key={hotel._id}
                          photo={hotel.photo}
                          description={hotel.description}
                          price={hotel.price}
                          photoCount={hotel.photoCount}
                          guestScore={hotel.guestScore}
                          city={hotel.city}
                          country={hotel.country}
                          address={hotel.address}
                          _id={hotel._id}
                          name={hotel.name}
                          url={hotel.url}
                          location={hotel.location}
                          stars={hotel.stars}
                          distance={hotel.distance}
                          amenities={hotel.amenities}
                          rooms={hotel.rooms}
                          type={hotel.type}
        />
    });

    return (
        <div>
            {hotelList}
        </div>
    );
})
