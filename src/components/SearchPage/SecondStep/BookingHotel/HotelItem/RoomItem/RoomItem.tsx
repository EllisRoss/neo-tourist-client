import React from 'react';
import {Col, Button, Row} from 'antd';
import {Hotel, Room, SelectedHotel} from "../../../../../../types/types";
import {MoreDetailsDrawer} from "./MoreDetailsDrawer/MoreDetailsDrawer";
import styles from "./RoomItem.module.css"
import {useDispatch, useSelector} from "react-redux";
import {flightAndHotelActions} from "../../../../../../redux/searchFlightAndHotelReducer";
import {selectStepValue} from "../../../../../../redux/selectors/searchFlightAndHotelSelectors";
import {selectVacationDuration} from "../../../../../../redux/selectors/searchHotelSelectors";

type PropsType = {
    hotel: Hotel;
    room: Room;
}

export const RoomItem: React.FC<PropsType> = React.memo((props) => {
    const dispatch = useDispatch();
    const step = useSelector(selectStepValue);
    const vacationDuration = useSelector(selectVacationDuration);

    const onClickReserve = () => {
        let selectedHotel: SelectedHotel = {
            hotel: props.hotel,
            room: props.room,
        }
        dispatch(flightAndHotelActions.setSelectedHotel(selectedHotel));
        dispatch(flightAndHotelActions.toggleIsHotelSelected(true));
    }
    return (
        <div className={styles.wrapper}>
            <Row>
                <Col span={16}>
                    <div><b>{props.room.name}</b></div>
                    <div>{props.room.bed}</div>
                    <div>{props.room.desc}</div>
                    <div>{props.room.view}</div>
                </Col>
                <Col span={6}>
                    <b>Options: </b>
                    {props.room.options.breakfast && <div>Breakfast</div>}
                    {props.room.options.freeWifi && <div>Free Wi-Fi</div>}
                    {props.room.options.smoking ? <div>Smoking room</div> : <div>Non-smoking room</div>}
                    {props.room.options.minibar && <div>Minibar</div>}
                    {props.room.options.tv && <div>TV</div>}
                    {props.room.options.attached_bathroom && <div>Attached bathroom</div>}
                    {props.room.options.air_conditioning && <div>Air conditioning</div>}
                </Col>
                <Col flex={1}>
                    <b>Price: </b>
                    <div>{props.room.price} &#8381;</div>
                    <div>per day</div>
                    {
                        vacationDuration && <div>
                            <b>Total price: </b>
                            <div>{props.room.price * vacationDuration} &#8381;</div>
                        </div>
                    }
                </Col>
            </Row>

            <div>
                <div className={styles.details_button}>
                    <MoreDetailsDrawer photos={props.room.photos}
                                       name={props.room.name}
                                       desc={props.room.desc}
                                       personAmount={props.room.personAmount}

                    />
                </div>
                <div className={styles.reserve_button}>
                    {
                        step !== 3 &&
                        <Button onClick={onClickReserve}>Reserve</Button>
                    }
                </div>
            </div>
        </div>
    );
})
