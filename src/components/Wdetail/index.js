import React from "react";
import "../../../src/App.css";

function Wdetail(props){
    
    return(
        <div className="Wdetail">
            {props.name}
            <div >
                <input className="Wtitle"type={"text"}></input>
            </div>
        </div>
    )
}
 
export default Wdetail;
