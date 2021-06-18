import React from "react";
import {Button, Col, Collapse, Row, Switch, Typography} from "antd";
import styles from "./SortPanel.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, selectHotelQuery} from "../../../../redux/selectors/searchHotelSelectors";
import {getHotelsThunkCreator, searchHotelActions} from "../../../../redux/searchHotelReducer";
import {HotelFilterType} from "../../../../types/types";


export const SortPanel: React.FC = React.memo(() => {

    const filter = useSelector(selectFilter);
    const hotelQuery = useSelector(selectHotelQuery);
    const dispatch = useDispatch();

    const onChangeLowPrice = (checked: boolean) => {
        let newFilter: HotelFilterType = {
            sortByLowPrice: checked,
            sortByStars: false,
            sortByUsersScore: false,
        }

        dispatch(searchHotelActions.setHotelFilter(newFilter));
    }
    const onChangeStars = (checked: boolean) => {
        let newFilter: HotelFilterType = {
            sortByLowPrice: false,
            sortByStars: checked,
            sortByUsersScore: false,
        }
        dispatch(searchHotelActions.setHotelFilter(newFilter));
    }
    const onChangeUsersScore = (checked: boolean) => {
        let newFilter: HotelFilterType = {
            sortByLowPrice: false,
            sortByStars: false,
            sortByUsersScore: checked,
        }
        dispatch(searchHotelActions.setHotelFilter(newFilter));
    }
    const onClick = () => {
        if (hotelQuery) {
            dispatch(getHotelsThunkCreator(hotelQuery, filter));
        }
    }


    return (
        <div className={styles.wrapper}>
            <Collapse bordered={true}>
                <Collapse.Panel header="Filter" key="1">
                    <div className={styles.panel_items}>
                        <Row>
                            <Col>
                                <div className={styles.price}>
                                    <Switch checked={filter.sortByLowPrice} onChange={onChangeLowPrice}/>
                                    <Typography.Text>Sort by low price</Typography.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className={styles.stars}>
                                    <Switch checked={filter.sortByStars} onChange={onChangeStars}/>
                                    <Typography.Text>Sort by stars</Typography.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className={styles.score}>
                                    <Switch checked={filter.sortByUsersScore} onChange={onChangeUsersScore}/>
                                    <Typography.Text>Sort by users score</Typography.Text>
                                </div>
                            </Col>
                            <Col onClick={onClick}>
                                <div className={styles.submit_button}>
                                    <Button>Submit</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Collapse.Panel>
            </Collapse>
        </div>
    );
});
