import React from "react";
import { Link } from "react-router-dom";

const Recruit = ({id, title, date, place}) => {
    return(
        <div className="Recruit_head">
            <h to={`/details/${id}`}>
                <div>
                   id: {id} <br></br> title: {title} <br></br>date: {date}<br></br> place: {place}
                </div>
            </h>
            <Link to="/apply"><button className="Writebtn2">신청하기</button></Link>
           

        </div>

    );
}

export default Recruit