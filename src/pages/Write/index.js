import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Wdetail from "../../components/Wdetail";
import Wdetail2 from "../../components/Wdetail2";
import Wdetail3 from "../../components/Wdetail3";



const WritePage = () => {
  return (

    <div>
    <Banner/>
    <div class='outer-div'>
    
        <div class='inner-div'>
        <h2 className="TEXT_h2">모집 글 쓰기</h2>
        <div className="JUMP">
          <Wdetail name="제목 쓰기" ></Wdetail>
        </div>
        <Wdetail name="축구장 / 풋살장 이름"></Wdetail>
        <Wdetail2 name="지역 (시/도/구)"></Wdetail2>
        <Wdetail2 name="모집 인원수 / 포지션"></Wdetail2>
        <Wdetail2 name="날짜 시간"></Wdetail2>
        <Wdetail3 name="상세 설명"></Wdetail3>
        <button className="Submitwrite">모집 글 올리기</button>
        
        
        
        

        
        
        </div>
    </div>
    </div>
  );
};

export default WritePage;