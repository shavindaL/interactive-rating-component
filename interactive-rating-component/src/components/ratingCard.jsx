import React from "react";
import Button from "./button";

function RatingCard() {

    return (
        <div className="card">
            {/* <!-- Rating state start --> */}
            <div id="star-container"><img id="star" src="./images/icon-star.svg" alt="star-icon" /></div>
            <h1>How did we do?</h1>

            <h5> Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </h5>

            <div id="rating-container">
                <div id="ratings">
                    <Button value={1} />
                    <Button value={2} />
                    <Button value={3} />
                    <Button value={4} />
                    <Button value={5} />
                </div>
            </div>
            <div>
                <button id="submit-btn">Submit</button>
            </div>

            {/* <!-- Rating state end --> */}

        </div>
    )
}

export default RatingCard;