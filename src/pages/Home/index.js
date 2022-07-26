import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DetailCard from "../../components/DetailCard";
import Banner from "../../components/Banner";
import ApiService from "../../services/api";
import "../../../src/App.css";
import TEXT from "../Detail/TEXT";
import Recruit from "../../components/Recruit";

const HomePage = () => {
  const [data, setData] = useState([]);

  // 페이지 진입시 데이터 불러오기
  useEffect(() => {
    ApiService.fetchDummy().then((data) => setData(data));
  }, []);

  return (
    <><><div>
      <Banner/>
    </div><div className="SelectBar">
        <h className="SelectBarText">축구 용병 모집글 찾아보기</h>
        <div className="SelectBox"style={{display:"flex"}}>
          <TEXT name="지역"></TEXT>
          
          <select class="box" id="domain-list">
            <option value="Seoul">서울시</option>
            <option value="Bucheon">부천시</option>
            <option value="Busan">부산특별시</option>
            <option value="Changwon">창원특례시</option>
            <option value="Daejeon">대전광역시</option>
          </select>

          <TEXT name="구장"></TEXT>
          <select class="box" id="domain-list2">
            <option value="footground">풋살장</option>
            <option value="soccerground">축구장</option>
          </select>


          <TEXT name="포지션"></TEXT>
          <select class="box" id="domain-list3">
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
            
          <TEXT name="모집인원"></TEXT>
          <select class="box" id="domain-list4">
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
        </div>
        <div>
          <input className="Search"type={"search"} name="search"/>
        </div>
          
        
      </div></><div className="Gopage">
      <h2 className="Mojip_padding">모집글</h2>
      
        {data.map((item) => {
          return (
            <h className="Right" key={item.id}>
              <Recruit id={item.id} title={item.title} date={item.date} place={item.place}/> 
              <Recruit id={item.id} title={item.title} date={item.date} place={item.place}/> 
              
             
              
              
              
              
            </h>

          );
        })}

  
      </div></>
    
  );
};

export default HomePage;