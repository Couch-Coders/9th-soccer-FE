import axios from "axios";


const ACCESS_KEY = "ThS3k9yN15WwbT8WZEcLqtJhrW38AoI-tAMnzGellK0";
const SERVER_HOST = "https://api.unsplash.com";

const ApiService = {
   
    async fetchRandomImageUrl() {
        // 호스트는 거의 항상 동일하니까 별도 상수로 분리
        const result = await axios.get(`${SERVER_HOST}/photos/random?client_id=${ACCESS_KEY}`);
    
        // 필요한 데이터를 반환
        return result.data.urls.small;
      },

    async fetchDummy() {
        return [
          
          { id: "soccer", title: "Go to soccer page", date: "7/25", place: "Seoul" },
          { id: "baseball", title: "Go to baseball page",date: "7/25", place: "Seoul" },
          { id: "basketball", title: "Go to basketball page",date: "7/25", place: "Seoul" },

          
        ];
      },
};


export default ApiService