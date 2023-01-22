import React from "react";
import '../styles/thanksCard.css';
import { useLocation } from "react-router-dom";

function ThankCard() {

    const {state} = useLocation();
    const {rating} = state;

    return (
        <>
            <div className='thank-card'>
                {/* <!-- Thank you state start --> */}

                <div>
                    <img src='../images/illustration-thank-you.svg' alt=""/>
                </div>

                <div className="selection">
                    <p>You selected {rating} out of 5</p>
                </div>

                <div>
                    <h2>Thank you!</h2>
                </div>

                <div>
                    <p>
                        We appreciate you taking the time to give a rating. If you ever need more support,
                        don’t hesitate to get in touch!
                    </p>
                </div>

                {/* <!-- Thank you state end --> */}
            </div>
        </>
    )
}

export default ThankCard;
