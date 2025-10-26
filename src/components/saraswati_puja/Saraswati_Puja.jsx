import React from 'react'
import { highlights } from '../../data/EventHighlights';
import HighlightsCard from '../event_highlights_card/HighlightsCard';
import './saraswati_puja.css'
// import { Sponsors } from '../sponsors/Sponsors';

const SaraswatiPuja = () => {

  return (
    <div className='container' id='saraswati_puja'>
      <div className="title-container">
        <h1 className="section-heading center" data-aos="fade-up" data-aos-duration="500">Saraswati Puja</h1>
        <div className="line" data-aos="fade-up" data-aos-duration="500" data-aos-delay="250"></div>
      </div>

      <div className="about-div bg" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
        <img src="images/saraswati_mata.jpg" alt="About" className="about-img" />
        <p className="about-text">
        Saraswati Puja is an annual event organized by NTBS, Thapathali Campus on the auspicious occasion of Basanta Panchami. The primary purpose of Saraswati Puja is to inspire a deep sense of devotion and reverence among students and faculty alike. It serves as a reminder of the significance of education and the pursuit of wisdom in our lives. The campus comes alive with the vibrant and beautiful decorations dedicated to the Goddess, creating an atmosphere of serenity and spiritual awakening. During this sacred event, students and visitors are provided with the unique opportunity to come together and engage in prayer and worship, seeking the blessings of Goddess Saraswati for success in their academic and creative endeavors. 
        </p>
      </div>
      <HighlightsCard highlights={highlights} title="Event Highlights" />
    </div>
  )
}
export default SaraswatiPuja