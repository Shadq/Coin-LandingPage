import React from "react";
import { members } from "../members";
import "../styles/Team.css";

const Team = () => {
  return (
    <div className="team__container" id="team">
      <div className="team__text">
        <h1>Our Team</h1>
        <span>
          Our team is composed by 4 people that combined have over 40 years of
          experience in crypto
        </span>
      </div>
      <div className="team__members">
        {members.map((member) => (
          <div className="member">
            <div className="member__img">
              <img src={member.image} alt="image" />
            </div>
            <div className="member__content">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
              <button>Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
