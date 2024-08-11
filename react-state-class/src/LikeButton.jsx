import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  let toggleLiked = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let colorStyle = { color: "red" };

  return (
    <div>
      <p>Clicks = {clicks}</p>
      <p onClick={toggleLiked}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={colorStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
