import React from "react";
import "../../../src/App.css";

function Wdetail2_1(props){
    
    return(
        <div className="Wdetail">
            {props.name}
            <div>
            <select  className="WBox" class="box" id="domain-list4">
              <option value="Seoul">1명</option>
              <option value="Bucheon">2명</option>
              <option value="Bucheon">3명</option>
              <option value="Bucheon">4명</option>
              <option value="Bucheon">5명</option>
              <option value="Bucheon">6명</option>
              <option value="Bucheon">7명</option>
              <option value="Bucheon">8명</option>
              <option value="Bucheon">9명</option>
              <option value="Bucheon">10명</option>
              <option value="Bucheon">기타</option>
            </select>
            <select className="WBox" class="box" id="domain-list3">
              <option value="ST">ST</option>
              <option value="LW">LW</option>
              <option value="RW">RW</option>
              <option value="CF">CF</option>
              <option value="CAM">CAM</option>
              <option value="CM">CM</option>
              <option value="CDM">CDM</option>
              <option value="CB">CB</option>
              <option value="RB">RB</option>
              <option value="LB">LB</option>
              <option value="GK">GK</option>
            </select>
            </div>
        </div>
    )
}
 
export default Wdetail2_1;