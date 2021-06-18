// import {InitialStateType, searchActions, searchPageReducer} from "../searchFlightReducer";
// import {Amenity, Flight, Hotel, Room} from "../../types/types";
//
// let state: InitialStateType = {
//     flights: [
//         {
//             origin: 'origin',
//             destination: 'destination',
//             price: 322,
//             transfers: 1,
//             airline: "COD",
//             flight_number: 228,
//             departure_at: 'today',
//             return_at: 'tomorrow',
//             expires_at: 'today + 2h',
//         },
//     ],
//     hotels: [],
//     choiceHotel: null,
//     choiceFlight: null,
//     currentPage: 1,
//     pageSize: 10,
// }
//
// const newFlights: Array<Flight> = [
//     {
//         origin: 'origin',
//         destination: 'destination',
//         price: 322,
//         transfers: 1,
//         airline: "COD",
//         flight_number: 228,
//         departure_at: 'today',
//         return_at: 'tomorrow',
//         expires_at: 'today + 2h',
//     },
//     {
//         origin: 'origin 2',
//         destination: 'destination 2',
//         price: 455,
//         transfers: 2,
//         airline: "COD 2",
//         flight_number: 822,
//         departure_at: 'today 2',
//         return_at: 'tomorrow 2',
//         expires_at: 'today + 6h',
//     },
// ];
// const newHotels: Array<Hotel> = [
//     {
//         maxPricePerNight: 228,
//         maxPrice: 322,
//         price: 295,
//         minPriceTotal: 200,
//         photoCount: 20,
//         guestScore: 75,
//         city: 'city 1',
//         country: 'country',
//         address: 'address',
//         id: 'id 1',
//         name: 'Hotel 1',
//         url: 'http://url',
//         popularity: 87,
//         location: {
//             lon: 12,
//             lat: 21,
//         },
//         stars: 3,
//         distance: 123,
//         amenities: [],
//         rooms: [],
//         rating: 63,
//     },
//     {
//         maxPricePerNight: 228,
//         maxPrice: 322,
//         price: 295,
//         minPriceTotal: 200,
//         photoCount: 20,
//         guestScore: 75,
//         city: 'city 2',
//         country: 'country 2',
//         address: 'address 2',
//         id: 'id 2',
//         name: 'Hotel 2',
//         url: 'http://url2',
//         popularity: 97,
//         location: {
//             lon: 31,
//             lat: 13,
//         },
//         stars: 4,
//         distance: 321,
//         amenities: [],
//         rooms: [],
//         rating: 76,
//     },
// ];
//
//
// beforeEach(() => {
//     state = {
//         flights: [
//             {
//                 origin: 'origin',
//                 destination: 'destination',
//                 price: 322,
//                 transfers: 1,
//                 airline: "COD",
//                 flight_number: 228,
//                 departure_at: 'today',
//                 return_at: 'tomorrow',
//                 expires_at: 'today + 2h',
//             },
//         ],
//         hotels: [],
//         choiceHotel: null,
//         choiceFlight: null,
//         currentPage: 1,
//         pageSize: 10,
//     }
// })
//
// test('Successfully setted flights', () => {
//     const newState = searchPageReducer(state, searchActions.setFlights(newFlights))
//
//     expect(newState.flights.length).toBe(2);
//     expect(newState.flights[1].airline).toBe('COD 2');
//     expect(newState.flights[1].price).toBe(455);
// });
//
// test('Successfully setted hotels', () => {
//     const newState = searchPageReducer(state, searchActions.setHotels(newHotels))
//
//     expect(newState.hotels.length).toBe(2);
//     expect(newState.hotels[0].city).toBe('city 1');
//     expect(newState.hotels[1].city).toBe('city 2');
//
// });
