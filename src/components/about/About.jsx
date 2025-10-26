import React from 'react'
import './about.css'

const About = () => {
    return (
        <>
            <div className="container" id="about">
                <div className="title-container">
                <h1 className="section-heading center" data-aos="fade-up" data-aos-duration="500">About NTBS</h1>
                    <div className="line" data-aos="fade-up" data-aos-duration="500" data-aos-delay="250"></div>
                </div>
                
                    <div className="about-div" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <img src="images/about.jpg" alt="About" className="about-img" />
                        <p className="about-text">
                            Nepal Terai Bidhyarthi Sangh (NTBS) is a non-political
                            organization in Thapathali Campus which was
                            established in 2056 B.S. It is formed in order to initiate mutual
                            relation among students from Terai which includes the primeval
                            citizens i.e. Madhesis, who have been living in the southern
                            plains of Nepal whose mother tongue is any among Maithili,
                            Bhojpuri, Bajjika, Urdu, Tharu, Awadhi, Marwadi, Jhangad, and
                            Santhal. We've been engaged in different technical sector as
                            well as extra curriculum activities till date. We have a great
                            prestige and recognition in social aspects. NTBS has raised itself
                            as a successful organization by involving the students of the
                            entire campus in different activities and also outside the campus
                            on educational, social and cultural issues.
                        </p>
                    </div>
            </div>
        </>
    )
}
export default About
