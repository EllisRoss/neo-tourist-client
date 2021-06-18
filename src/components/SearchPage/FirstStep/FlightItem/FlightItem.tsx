import React from 'react';
import {TwoSideFlight} from "../../../../types/types";
import {Button, Col, Row} from "antd";
import {StepsLine} from "./StepsLine/StepsLine";
import styles from "./FlightItem.module.css"
import {useDispatch, useSelector} from "react-redux";
import {flightAndHotelActions} from "../../../../redux/searchFlightAndHotelReducer";
import {selectStepValue} from "../../../../redux/selectors/searchFlightAndHotelSelectors";
import moment from "moment";
import {searchHotelActions} from "../../../../redux/searchHotelReducer";
import {selectPassengers} from "../../../../redux/selectors/searchFlightSelectors";

export const FlightItem: React.FC<TwoSideFlight> = React.memo((props) => {

    const dispatch = useDispatch();
    const step = useSelector(selectStepValue);
    const passengers = useSelector(selectPassengers);

    const onClick = () => {
        let flight: TwoSideFlight = {...props};

        let arrivalDate = props.there.arrival_date;
        let departureDate = props.back.departure_at;
        let arrivalMoment = moment(arrivalDate);
        let departureMoment = moment(departureDate);
        let vacationDuration = departureMoment.diff(arrivalMoment, 'days');

        dispatch(searchHotelActions.setVacationDuration(vacationDuration));
        dispatch(flightAndHotelActions.setSelectedFlight(flight))
        dispatch(flightAndHotelActions.toggleIsFlightSelected(true));
    }

    const FromDepartureAt = props.there.departure_at.split(' ');
    const FromArrivalDate = props.there.arrival_date.split(' ');
    const FromTripDuration = props.there.duration.split(':');

    const ToDepartureAt = props.back.departure_at.split(' ');
    const ToArrivalDate = props.back.arrival_date.split(' ');
    const ToTripDuration = props.back.duration.split(':');

    return (
        <div className={styles.wrapper}>
            <div>
                <Row>
                    <Col className={styles.baggage} flex="auto">
                        {props.there.flights_handbags && <div>Hand bags</div>}
                        {props.there.flights_baggage.isIncluded && <div>Baggage {props.there.flights_baggage.weight}kg</div>}
                        <div className={styles.baggageFooter}>with baggage</div>
                    </Col>
                    <Col className={styles.price} flex="auto">
                        <div>
                            <b>{props.there.price + props.back.price} &#8381;</b>
                        </div>
                        {
                            step !== 3 &&
                            <Button onClick={onClick} size={"large"}>Buy</Button>
                        }

                    </Col>
                </Row>
                <Row>
                    <Col flex={2}>
                        <div className={styles.sideDescription}>
                            <div className={styles.time}><b>{FromDepartureAt[1]}</b></div>
                            <div className={styles.description}>{FromDepartureAt[0]}</div>
                            <div className={styles.description}>{props.there.origin}</div>
                        </div>

                    </Col>
                    <Col flex={4}>
                        <StepsLine destination={props.there.destination}
                                   origin={props.there.origin}
                                   transfers={props.there.transfers}
                                   departure_airport={props.there.departure_airport}
                                   arrival_airport={props.there.arrival_airport}
                                   arrival_date={FromArrivalDate}
                                   departure_at={FromDepartureAt}
                                   trip_duration={FromTripDuration}
                        />
                    </Col>
                    <Col flex={2}>
                        <div className={styles.sideDescription}>
                            <div className={styles.time}><b>{FromArrivalDate[1]}</b></div>
                            <div className={styles.description}>{FromArrivalDate[0]}</div>
                            <div className={styles.description}>{props.there.destination}</div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col className={styles.baggage} flex="auto">
                        {props.back.flights_handbags && <div>Hand bags</div>}
                        {props.back.flights_baggage.isIncluded && <div>Baggage {props.back.flights_baggage.weight}kg</div>}
                        <div className={styles.baggageFooter}>with baggage</div>
                    </Col>
                </Row>
                <Row>
                    <Col flex={2}>
                        <div className={styles.sideDescription}>
                            <div className={styles.time}><b>{ToDepartureAt[1]}</b></div>
                            <div className={styles.description}>{ToDepartureAt[0]}</div>
                            <div className={styles.description}>{props.back.origin}</div>
                        </div>

                    </Col>
                    <Col flex={4}>
                        <StepsLine destination={props.back.destination}
                                   origin={props.back.origin}
                                   transfers={props.back.transfers}
                                   departure_airport={props.back.departure_airport}
                                   arrival_airport={props.back.arrival_airport}
                                   arrival_date={ToArrivalDate}
                                   departure_at={ToDepartureAt}
                                   trip_duration={ToTripDuration}
                        />
                    </Col>
                    <Col flex={2}>
                        <div className={styles.sideDescription}>
                            <div className={styles.time}><b>{ToArrivalDate[1]}</b></div>
                            <div className={styles.description}>{ToArrivalDate[0]}</div>
                            <div className={styles.description}>{props.back.destination}</div>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );
})
