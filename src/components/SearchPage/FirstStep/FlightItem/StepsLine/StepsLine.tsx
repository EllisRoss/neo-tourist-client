import React from 'react';
import {Transfer} from '../../../../../types/types';
import { Steps} from "antd";
import styles from "./StepLine.module.css"

type PropsType = {
    origin: string;
    destination: string;
    departure_airport: string // IATA code
    arrival_airport: string // IATA code
    transfers: {
        count: number;
        list?: Array<Transfer>;
    }
    departure_at: Array<string>;
    arrival_date: Array<string>;
    trip_duration: Array<string>;
}

export const StepsLine: React.FC<PropsType> = React.memo((props) => {

    const departDesc = `Departure at ${props.departure_at[1]} from ${props.origin}`;
    const arrivalDesc = `Arrival at ${props.arrival_date[1]} to ${props.destination}`;

    let transferList = props.transfers.list?.map(item => {
        let key = item.city + item.duration;
        const duration = item.duration.split(':');
        const durationDesc = `Transfer duration ${duration[0]}h ${duration[1]}m in ${item.city} airport`;
        return <Steps.Step key={key} title={item.at} description={durationDesc}/>
    });


    return (
        <div>
            <div className={styles.timeInTrip}>Time in trip: {props.trip_duration[0]}h {props.trip_duration[1]}m</div>
            <Steps progressDot current={5}>
                <Steps.Step title={props.departure_airport} description={departDesc}/>
                {transferList}
                <Steps.Step title={props.arrival_airport} description={arrivalDesc} />
            </Steps>
        </div>
    );
})
