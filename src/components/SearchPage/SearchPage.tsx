import React, {useState} from "react";
import {Button, message, Steps} from "antd";
import {FirstStepFlight} from "./FirstStep/FirstStepFlight";
import {ThirdStepCheckout} from "./ThirdStep/ThirdStepCheckout";
import styles from "./SearchPage.module.css"
import {useSelector} from "react-redux";
import {
    selectIsFlightSelected,
    selectIsHotelSelected
} from "../../redux/selectors/searchFlightAndHotelSelectors";
import {SecondStepHotel} from "./SecondStep/SecondStepHotel";

export const SearchPage: React.FC = React.memo(() => {
    const isFlightSelected = useSelector(selectIsFlightSelected);
    const isHotelSelected = useSelector(selectIsHotelSelected);
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Flight',
            content: <FirstStepFlight/>,
        },
        {
            title: 'Hotel',
            content: <SecondStepHotel/>,
        },
        {
            title: 'Checkout',
            content: <ThirdStepCheckout/>,
        },
    ];

    const buttonDisabled = () => {
        if (current === 0 && isFlightSelected) {
            return false
        }
        if (current === 1 && isHotelSelected) {
            return false
        }
        return true
    }

    return (
        <div>
            <div className={styles.progress_panel}>
                <div className={styles.navigation}>
                    <Steps current={current}>
                        {steps.map(item => (
                            <Steps.Step key={item.title} title={item.title}/>
                        ))}
                    </Steps>
                </div>
                <div className={styles.buttons}>
                    <div className="steps-action">
                        <div className={styles.left_button}>
                            {current > 0 && (
                                <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                                    Previous
                                </Button>
                            )}
                        </div>

                        <div className={styles.right_button}>
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()} disabled={buttonDisabled()}>
                                    Next
                                </Button>
                            )}
                        </div>

                        <div className={styles.right_button}>
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Reserve
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="steps-content">{steps[current].content}</div>
        </div>
    );
})
