import {Col, Collapse, Image, Rate, Row} from 'antd';
import React from 'react';
import {Hotel} from "../../../../../types/types";
import styles from "./HotelItem.module.css"
import {RoomItem} from "./RoomItem/RoomItem";

export const HotelItem: React.FC<Hotel> = React.memo((props) => {

    const hotel = {...props};

    const roomList = props.rooms.map(room => {
        return <RoomItem key={room.id} room={room} hotel={hotel}/>
    })
    const amenityList = props.amenities.map(item => {
        return <div key={item.id}>- {item.name}</div>
    });

    return (
        <div className={styles.wrapper}>
            <Row>
                <Col span={8}>
                    <Image width={300} src={props.photo}/>
                    <div><b>Amenities: </b></div>
                    {amenityList}
                </Col>
                <Col span={13}>
                    <div className={styles.hotelName}><b>{props.name}</b> <Rate disabled value={props.stars}/></div>
                    <div>{props.address}, {props.city}</div>
                    <div>{props.distance} km from centre</div>
                    <div className={styles.description}>
                        <Collapse bordered={false} >
                            <Collapse.Panel header="Description" key="1">
                                <div>{props.description}</div>
                            </Collapse.Panel>
                        </Collapse>
                    </div>
                </Col>
                <Col span={3}>
                    <div>Users score <b>{props.guestScore / 10}</b></div>
                    <div className={styles.price}>RUB {props.price}</div>
                    <div className={styles.perDay}>per day</div>
                </Col>
            </Row>
            <Collapse bordered={false}>
                <Collapse.Panel header="Rooms" key="1">
                    {roomList}
                </Collapse.Panel>
            </Collapse>
        </div>
    );
})
