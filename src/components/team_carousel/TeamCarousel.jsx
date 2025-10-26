import { React, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import './team_carousel.css';
import TeamCard from '../team_card/TeamCard';
// import { committeeMembers } from '../../data/CommitteeMembers';
import { RxChevronRight, RxChevronLeft } from 'react-icons/rx';

const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <RxChevronLeft />
    </div>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next-arrow" onClick={onClick}>
      <RxChevronRight />
    </div>
  );

const TeamCarousel = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };
    const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}committee_members/`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

    return (
        <div className="team-slide">
            <Slider {...settings}>
                {data.map((member) => (
                    <TeamCard key={member.sno} member={member} />
                ))}
            </Slider>
        </div>
    )
}

export default TeamCarousel

