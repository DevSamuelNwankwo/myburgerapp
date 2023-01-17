import React from "react";
import './BuildControl.css'

const BuildControl = () => {
    return ( 
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less"> less</button>
            <button className="More"> more</button>

        </div>
     );
}
 
export default BuildControl;