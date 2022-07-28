import axios from "axios";
import Img from "../assets/Busan.jpeg"
import Img2 from "../assets/Namyangju.jpg"
import Img3 from "../assets/Seoul_Gangseo.jpg"
import Img4 from "../assets/Seoul_Irwon.jpg"
import Img5 from "../assets/Bucheon.jpg"
import Img6 from "../assets/Daejeon.jpeg"



const ACCESS_KEY = "ThS3k9yN15WwbT8WZEcLqtJhrW38AoI-tAMnzGellK0";
const SERVER_HOST = "https://soccer-community.herokuapp.com/games";

const ApiService = {
   
    async fetchRandomImageUrl() {
        // 호스트는 거의 항상 동일하니까 별도 상수로 분리
        const result = await axios.get(`${SERVER_HOST}/photos/random?client_id=${ACCESS_KEY}`);
    
        // 필요한 데이터를 반환
        return result.data.urls.small;
      },

    async fetchDummy() {
        return [
          { id: "1", title: "광안리 손흥민 축구팀 모임", member:5, date: "7/25", place: "부산 수영구", position: "MF(2)/ST/DF(2)", img: <img src={Img} style={{width:"100%", height:"100%"}}/>  },
          { id: "2", title: "덕소리 조축 3명 모집합니다", member:3, date: "9/5", place: "경기도 남양주", position: "GK/FW/MF" ,img: <img src={Img2} style={{width:"100%", height:"100%"}}/> }, 
          { id: "3", title: "까치산 야간 용병 구합니다", member:1, date: "5/11", place: "서울특별시 강서구", position: "MF",img: <img src={Img3} style={{width:"100%", height:"100%"}}/> },          
          { id: "4", title: "일원 풋살팀 창설맴버 모집", member:7, date: "6/22", place: "서울특별시 강남구", position: "MF(3)/GK/DF(3)",img: <img src={Img4} style={{width:"100%", height:"100%"}}/> },
          { id: "5", title: "역곡 축구 용병 구함", member:4, date: "10/3", place: "경기도 부천시", position: "MF/FW/GK/DF" , img: <img src={Img5} style={{width:"100%", height:"100%"}}/>},
          { id: "6", title: "대전 풋살 용병 구함", member:2, date: "2/27", place: "대전광역시", position: "MF/ST",img: <img src={Img6} style={{width:"100%", height:"100%"}}/> },
                    
        ];
      },
};


export default ApiService