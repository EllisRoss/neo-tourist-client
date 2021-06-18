import React from 'react';
import {ErrorMessage, Form, Formik} from "formik";
import {Input, InputNumber, SubmitButton, DatePicker, Select} from 'formik-antd';
import {useDispatch, useSelector} from "react-redux";
import {getFlightsThunkCreator, searchFlightsActions} from "../../../../redux/searchFlightReducer";
import styles from "./SearchFlightForm.module.css"
import {Col, Row} from "antd";
import {getHotelsThunkCreator, searchHotelActions} from "../../../../redux/searchHotelReducer";
import {Moment} from 'moment';
import {selectFilter} from "../../../../redux/selectors/searchHotelSelectors";

export type SearchFlightFormData = {
    origin: string;
    destination: string;
    dates: Array<Moment>;
    adult: number;
    child: number;
    flightClass: string;
}
export const SearchFlightForm: React.FC = React.memo(() => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const submit = (values: SearchFlightFormData, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        let hotelQuery = {
            city: values.destination,
            guests: values.child + values.adult,
            dates: values.dates,
        }
        dispatch(searchFlightsActions.setPassengers(values.child + values.adult));
        dispatch(getFlightsThunkCreator(values));
        dispatch(searchHotelActions.setHotelQuery(hotelQuery))
        dispatch(getHotelsThunkCreator(hotelQuery, filter));

        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    }

    return (
        <div>
            <Formik
                initialValues={{origin: '', destination: '', dates: [], adult: 1, child: 0, flightClass: 'economy'}}
                validate={values => {
                    type FormErrors = {
                        origin?: string;
                        destination?: string;
                        dates?: string;
                    }
                    const errors: FormErrors = {};
                    if (!values.origin) {
                        errors.origin = 'Required';
                    }
                    if (!values.destination) {
                        errors.destination = 'Required';
                    }
                    if (!values.dates) {
                        errors.dates = 'Required';
                    }
                    return errors;
                }}
                onSubmit={submit}
            >
                {({isSubmitting, errors}) => (
                    <Form>
                        <div className={styles.searchForm}>
                            <Row>
                                <Col>
                                    <Input name="origin" placeholder="Origin" style={{width: 150}}/>
                                    <ErrorMessage name='origin' component='div'/>

                                </Col>
                                <Col>
                                    <Input name="destination" placeholder="Destination" style={{width: 150}}/>
                                    <ErrorMessage name='destination' component='div'/>

                                </Col>
                                <Col>
                                    <DatePicker.RangePicker name="dates"/>
                                    <ErrorMessage name='dates' component='div'/>
                                </Col>
                                <Col>
                                    <InputNumber name="adult" min={1} max={2} defaultValue={1} style={{width: 60}}/>
                                    <div>Adults</div>

                                </Col>
                                <Col>
                                    <InputNumber name="child" min={0} max={2} style={{width: 60}}/>
                                    <div>Children</div>
                                </Col>
                                <Col>
                                    <Select name="flightClass" defaultValue="economy" style={{width: 120}}>
                                        <Select.Option value="economy">Economy</Select.Option>
                                        <Select.Option value="comfort">Comfort</Select.Option>
                                        <Select.Option value="business">Business</Select.Option>
                                        <Select.Option value="firstGrade">First grade</Select.Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <SubmitButton disabled={isSubmitting}>
                                        Search flights
                                    </SubmitButton>
                                </Col>
                            </Row>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
})
