import React from "react";
import Banner from "../../components/Banner";
import PositionBox from "../../components/PositionBox";

const ApplyPage = ({id, title, date, place}) => {

    return(

        <div>
            <Banner/>
            
            <div class='outer=div'>
            
                <div class='inner-div'>
                
                <h2 className="TEXT_h2">용병 신청하기</h2>

                    <div className="inner2-div">
                        <h2>포지션 선택</h2>
                        
                        <PositionBox/>

                       
                        <button className="Submitapply">신청하기</button>
                    </div>
                    
                   
                    
                </div>
                

            </div>
        </div>
        

    );
}

export default ApplyPage