import { Button } from "bootstrap";
import React from "react";

const PositionBox = () => {

    return(

        <div className="PositionBox">
            <label style={{fontSize:25}}><input className="PMF" type={"checkbox"} name='Position' value='MF'/>MF</label>
            <label style={{fontSize:25}}><input className="PST" type={"checkbox"} name='Position' value='ST'/>ST</label>
            <label style={{fontSize:25}}><input className="PGK" type={"checkbox"} name='Position' value='GK'/>GK</label>
            <label style={{fontSize:25}}><input className="PCB" type={"checkbox"} name='Position' value='CB '/>CB</label>
        </div>

    );

}

export default PositionBox;