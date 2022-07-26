import { Button } from "bootstrap";
import React from "react";

const PositionBox = () => {

    return(

        <div>
            <label><input type={"checkbox"} name='Position' value='MF'/>MF</label>
            <label><input type={"checkbox"} name='Position' value='ST'/>ST</label>
            <label><input type={"checkbox"} name='Position' value='GK'/>GK</label>
            <label><input type={"checkbox"} name='Position' value='CB '/>CB</label>
        </div>

    );

}

export default PositionBox;