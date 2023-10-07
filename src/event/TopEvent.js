import React from "react";

const Topevent = () => {
    const handlefooter = (value, e) => {
        e.preventDefault();
        alert(value)
    }
    return (
        <a href="/" onClick={(e) => handlefooter("Back To Home", e)}
        >Back To Home</a>
    )

}
export default Topevent;
