import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import ApiService from "../../services/api";




const Banner = () => {
  const [imgUrl, setImgUrl] = useState("");
  
  useEffect(() => {
    ApiService.fetchRandomImageUrl().then((result) => setImgUrl(result));
  }, []);

  

  return (
    <div className="Banner">
      
      <img className="Soccerball"src={`${process.env.PUBLIC_URL}/image/soccer_ball.png`}/>
      



      <button className="Loginbtn">로그인</button>
      <button className="Mypagebtn">마이페이지</button>
      <Link to="/write"><button className="Writebtn">글 쓰기</button></Link>
      
      
      

    </div>
  );
};

export default Banner;