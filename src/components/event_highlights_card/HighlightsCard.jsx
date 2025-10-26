import React from "react";
import "./highlights_card.css";

const HighlightsCard = (props) => {
  const highlights = props.highlights;
  const title = props.title;
  return (
    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="250">
      <h2 className="highlightsCard-heading">{title}</h2>
      <div className="highlightsCard-grid">
        {highlights.map((highlight) => {
          return (
            <div className="highlightsCard" key={highlight.id}>
              <div className="highlightsCard-imgBox">
                <img src={highlight.imageUrl} alt="Event Highlights" />
              </div>
              <div className="highlightsCard-content">
                <h1>{highlight.title}</h1>
                <p>{highlight.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightsCard;
