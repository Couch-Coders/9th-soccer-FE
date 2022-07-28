import React from "react";
import "../../../src/App.css";

function Wdetail2_2(props){
    
    return(
        <div className="Wdetail">
            {props.name}
            <div>
                <input className="WBox" type="date" name="date"/>
                <input className="WBox" type="time" name="time"/>
            </div>
        </div>
    )
}
 
export default Wdetail2_2;