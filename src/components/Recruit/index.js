import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/soccer_ball.png"

const Recruit = ({id, title, date, place, member, position, img}) => {
    return(
        <div className="Recruit_head">
    
                <div>
                    <div style={{width:"100%", height:"150px"}}>{img}</div>
                    <h className="Recruit_title">{title}</h><br></br>
                     <h className="Recruit_id">ID : {id} <br></br></h>
                     <h className="Recruit_date"> 날짜 : {date}</h>
                     <h className="Recruit_place">  {place}</h><br></br>
                     <h className="Recruit_member">남은인원 : {member}명</h>
                     <h className="Recruit_position"> 포지션 : {position}</h>
                     
                     
                </div>
           
            <Link to={`/apply/${id}`}><button className="Writebtn2" >신청하기</button></Link>
           

        </div>

    );
}

export default Recruit