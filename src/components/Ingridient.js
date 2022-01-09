import React from "react";

function Ingridient({id, name}) {
    return (
        <div className="ingridient">
            <p key={id}>{name}</p>
        </div>
    )
}

export default Ingridient;