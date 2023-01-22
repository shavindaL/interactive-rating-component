import React, { useState } from "react";
import RatingButtons from "./button";
import '../styles/ratingCard.css';
import { useNavigate } from "react-router-dom";

function RatingCard() {

    const [userRating, setUserRating] = useState();
    const navigate = useNavigate();
    return (
        <div className="card">
            {/* <!-- Rating state start --> */}
            <div id="star-container"><img id="star" src={process.env.PUBLIC_URL + "/images/icon-star.svg"} alt="star-icon" /></div>
            <h1>How did we do?</h1>

            <h5> Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </h5>

            <form onSubmit={() => {
                navigate('/thanks', { state: { rating: userRating } })
            }}>
                <div>
                    <RatingButtons rating={setUserRating} />
                    <div id="submit-container">
                        <button type='submit' id="submit-btn">Submit</button>
                    </div>
                </div>
            </form>

            {/* <!-- Rating state end --> */}

        </div>
    )
}

export default RatingCard;