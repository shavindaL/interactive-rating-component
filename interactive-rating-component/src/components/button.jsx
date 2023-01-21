import React, { useState } from "react";

function RatingButtons() {
    const [selected, setSelected] = useState(false);
    const [myClass, setMyClass] = useState("btn");

    return (
        <>
            <div id="rating-container">
                <div class="btn-container">
                    <button type="button" className={myClass} onClick={() => { setSelected(true); console.log(selected); setMyClass("selected") }}>
                        1
                    </button>
                    <button type="button" className={myClass} onClick={() => { setSelected(true); console.log(selected); setMyClass("selected") }}>
                        2
                    </button>
                    <button type="button" className={myClass} onClick={() => { setSelected(true); console.log(selected); setMyClass("selected") }}>
                        3
                    </button>
                    <button type="button" className={myClass} onClick={() => { setSelected(true); console.log(selected); setMyClass("selected") }}>
                        4
                    </button>
                    <button type="button" className={myClass} onClick={() => { setSelected(true); console.log(selected); setMyClass("selected") }}>
                        5
                    </button>
                </div>
            </div>
        </>
    )
}

export default RatingButtons;
