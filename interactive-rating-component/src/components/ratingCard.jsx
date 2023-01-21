import React from "react";
import RatingButtons from "./button";
import '../styles/ratingCard.css';

function RatingCard() {

    return (
        <div className="card">
            {/* <!-- Rating state start --> */}
            <div id="star-container"><img id="star" src="./images/icon-star.svg" alt="star-icon" /></div>
            <h1>How did we do?</h1>

            <h5> Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </h5>

            <form onSubmit={'/thanks'}>
                <div>
                    <RatingButtons />
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