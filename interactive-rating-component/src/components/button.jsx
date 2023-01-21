import React from "react";

function Button(props) {
    
    return(
        <>
            <div class="btn-container">
                <button className="btn">
                    {props.value}
                </button>
            </div>
        </>
    )
}

export default Button;
