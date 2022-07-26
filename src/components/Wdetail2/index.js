import React from "react";
import "../../../src/App.css";

function Wdetail2(props){
    
    return(
        <div className="Wdetail">
            {props.name}
            <div>
            <select className="WBox"class="box" id="domain-list">
                <option value="Seoul">서울시</option>
                <option value="Bucheon">부천시</option>
                <option value="Busan">부산특별시</option>
                <option value="Changwon">창원특례시</option>
                <option value="Daejeon">대전광역시</option>
            </select>
            </div>
        </div>
    )
}
 
export default Wdetail2;