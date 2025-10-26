import { React, useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './pages.css'
import TeamCard from '../components/team_card/TeamCard';
import { IoArrowBack } from "react-icons/io5";
import Loader from '../components/loader/Loader';
import Footer from '../components/footer/Footer';


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 3rem;
  margin-block: 3rem;
`

const Wrapper = styled.div`
  width: 275px;
`

const Committee = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}committee_members/`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="page-header-box">
        <Link to="/">
          <button className="Btn">
            <div className="sign"><IoArrowBack /></div>
            <div className="text">Back</div>
          </button>
        </Link>
        <h1 className='center page-heading'>NTBS Committee</h1>
      </div>
      {loading? (<Loader />) : (
        <Container>
        {data.map((member) => (
          <Wrapper key={member.id}>
          <TeamCard member={member} />
          </Wrapper>
        ))}
      </Container>
      )
      }
      <Footer />
    </>
  );
};

export default Committee;
