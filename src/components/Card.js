import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-dark-red dib br3 pa3 ma3 grow bw2 shadow-5 tc ba bw4 mw-3">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
