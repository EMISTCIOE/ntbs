import React from 'react';
import './team_card.css'

const TeamCard = ({ member }) => {
  const defaultImg = '/images/defaultImg.png'
  const handleImageError = (e) => {
    // If the image fails to load, replace the source with the default image
    e.target.src = '/images/defaultImg.png';
  };
  
  return (
          <div className="teamcard">
            <div className="image-content">
              <div className="teamcard-circle">
                <div className="teamcard-imgBox">
                  <img src={member.image ?? defaultImg} alt={member.position} onError={handleImageError} />
                </div>
              </div>
            </div>
            <div className="teamcard-content">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <h5>{member.batch} Batch</h5>
            </div>
          </div>
  );
};

export default TeamCard;



