import {Moment} from "moment";

export type StepType = 1 | 2 | 3;

export type Transfer = {
    at: string;
    to: string;
    duration: string;
    city: string;
    airline: string;
}

export type Flight = {
    id: string;
    origin: string;           // город вылета
    destination: string;      // город назначения
    price: number;            // цена
    departure_airport: string // IATA code
    arrival_airport: string // IATA code
    aircraft: string
    class: string;
    companyName: string;
    duration: string;
    transfers: {
        count: number;
        list?: Array<Transfer>
    }        // кол-во пересадок
    airline: string;          // IATA-код авиакомпании
    flight_number: number;    // номер рейса
    departure_at: string;     // дата вылета
    arrival_date: string;
    flights_handbags: boolean,
    flights_baggage: {
        weight?: number,
        isIncluded: boolean
    }
}

export type TwoSideFlight = {
    there: Flight,
    back: Flight,
}

export type Amenity = {
    id: string;
    name: string;
}

export type Room = {
    id: string;
    name: string;
    //bookingURL: string;
    photos: Array<string>;
    view: string,
    bed: string,
    available: number;
    options: {
        breakfast: boolean;
        refundable: boolean;
        deposit: boolean;
        cardRequired: boolean;
        smoking: boolean;
        freeWifi: boolean;
        minibar: boolean;
        tv: boolean;
        air_conditioning: boolean;
        coffee_machine: boolean;
        attached_bathroom: boolean;
    },
    desc: string;
    price: number;
    personAmount: number;
}

export type Hotel = {
    type: string;
    description: string,
    photo: string;
    price: number;
    photoCount: number;
    guestScore: number;
    city: string;
    country: string;
    address: string;
    _id: string;
    name: string;
    url: string;
    location: {
        lon: number;
        lat: number;
    },
    stars: number;
    distance: number;
    amenities: Array<Amenity>, // удобства
    rooms: Array<Room>;
}

export type SelectedHotel = {
    hotel: Hotel,
    room: Room,
}

export type HotelQueryType = {
    city: string;
    guests: number;
    dates: Array<Moment>;
};
export type HotelFilterType = {
    sortByLowPrice: boolean;
    sortByStars: boolean;
    sortByUsersScore: boolean;
};
export type HotelOptionsType = {
    breakfast: boolean;
    swimmingPool: boolean;
    smoking: boolean;
    familyRooms: boolean;
    allInclusive: boolean;
    freeWifi: boolean;
    fitnessCenter: boolean;
};
