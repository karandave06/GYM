import React from "react";
import "./card.scss";

const Card = ({ img, title }) => {
  return (
    <div className="card">
      <div className="inner">

        <div className="img">
          <img src={img} alt="" />
        </div>

        <div className="text">
          <h4>{title}</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
            veritatis enim vitae omnis, dolore ex reiciendis eligendi,
            voluptatem voluptas atque similique?
          </p>
        </div>

      </div>
    </div>
  );
};

export default Card;
