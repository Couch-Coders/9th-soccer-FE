import React from "react";
import Banner from "../../components/Banner";
import PositionBox from "../../components/PositionBox";
import { useParams } from "react-router";
import { useState , useEffect} from "react";
import ApiService from "../../services/api";



const ApplyPage = () => {

    const { id } = useParams();
    console.log(id)
    const [ data, setData ] = useState([]);

    useEffect(() => {
        ApiService.fetchDummy().then(setData);
      }, []);
    

    const item = data.find(function(item){
        return(
          item.id == id
        )
      })
      console.log(item)

    return(

        <div>
            <Banner/>
            
            <div class='outer=div'>
            
                <div class='inner-div'>
                
                <h2 className="TEXT_h2">용병 신청하기</h2>
                    
                  

                    <div className="inner2-div">
                      <div className="Imgcss" >
                        {item?.img}
                        <h className="Apply_title">{item?.title}</h><br></br>
                        <h className="Apply_id">ID : {item?.id} <br></br></h>
                        <h className="Apply_date"> 날짜 : {item?.date}</h>
                        <h className="Apply_place">  {item?.place}</h><br></br>
                        <h className="Apply_member">남은인원 : {item?.member}명</h>
                        <h className="Apply_position"> 포지션 : {item?.position}</h>
                      </div>
                      
                      

                        
                    </div>
                    <div className = "inner3-div">

                    <h2 className="Apply_h2">포지션 선택</h2>
                        
                        
                        <PositionBox/>

                        
                       
                        <button className="Submitapply" onClick={() => alert("신청되었습니다.")}>신청하기</button>

                    </div>
                    
                   
                    
                </div>
                

            </div>
        </div>
        

    );
}

export default ApplyPage