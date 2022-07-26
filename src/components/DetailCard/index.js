import React from "react";
import { Link } from "react-router-dom";

// 컴포넌트 외부에서 주입해야 되는 부분은 Props 로 받음
 
const DetailCard = ({ id, title }) => {
  return (
    <div className="Post">
      <Link to={`/details/${id}`}>
        <div>{title}</div>
      </Link>
    </div>
  );
};

export default DetailCard;