import React from "react";

const TeamCard = (props) => {
  const { imgUrl, title } = props.item;

  return (


    <div className="single__team__item">
      <div className="team__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="team__details">
        <h6 className="team__title mb-4">{title}</h6>
      </div>
    </div>
  );
};

export default TeamCard;