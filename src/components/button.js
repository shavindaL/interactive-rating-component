import React, { useEffect, useState } from "react";

function RatingButtons(props) {
    const [selected, setSelected] = useState();
    const [btn1, setBtn1] = useState("btn");
    const [btn2, setBtn2] = useState("btn");
    const [btn3, setBtn3] = useState("btn");
    const [btn4, setBtn4] = useState("btn");
    const [btn5, setBtn5] = useState("btn");

    useEffect(() => {
        props.rating(selected);
        switch (selected) {
            case 1:
                setBtn1("selected");
                setBtn2("btn");
                setBtn3("btn");
                setBtn4("btn");
                setBtn5("btn");
                break;
            case 2:
                setBtn1("btn");
                setBtn2("selected");
                setBtn3("btn");
                setBtn4("btn");
                setBtn5("btn");
                break;
            case 3:
                setBtn1("btn");
                setBtn2("btn");
                setBtn3("selected");
                setBtn4("btn");
                setBtn5("btn"); break;
            case 4:
                setBtn1("btn");
                setBtn2("btn");
                setBtn3("btn");
                setBtn4("selected");
                setBtn5("btn"); break;
            case 5:
                setBtn1("btn");
                setBtn2("btn");
                setBtn3("btn");
                setBtn4("btn");
                setBtn5("selected"); break;

            default:
                break;
        }
    }, [selected]);

    return (
        <>
            <div id="rating-container">
                <div className="btn-container">
                    <button type="button" className={btn1} onClick={() => { setSelected(1); }}>
                        1
                    </button>
                    <button type="button" className={btn2} onClick={() => { setSelected(2); }}>
                        2
                    </button>
                    <button type="button" className={btn3} onClick={() => { setSelected(3); }}>
                        3
                    </button>
                    <button type="button" className={btn4} onClick={() => { setSelected(4); }}>
                        4
                    </button>
                    <button type="button" className={btn5} onClick={() => { setSelected(5); }}>
                        5
                    </button>
                </div>
            </div>
        </>
    )
}

export default RatingButtons;
