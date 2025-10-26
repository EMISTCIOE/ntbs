import { React, useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import axios from 'axios';
import './pages.css';
import Loader from '../components/loader/Loader';
import Footer from '../components/footer/Footer';

const List = styled.div`
  flex: 3.5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 2rem;
  min-height: 80vh;
`;

const Item = styled.a`
  text-decoration: none;
  width: 100%;
  height: 7rem;
  background-color: #f0efef;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const ItemText = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 85%;
  `;

const ItemTitle = styled.div`
  font-size: 1.4rem;
  color: #181b57;
  font-weight: bold;
  padding-inline: 1.25rem;
  overflow: hidden;

  @media (max-width: 958px) {
    font-size: 1rem;
  }
`;

const Gallery = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}photo_links/`);
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
        <h1 className='center page-heading'>NTBS Gallery</h1>
        <div className='page-subtitle'>
          <h2>Photos Links</h2>
        </div>
      </div>
      {loading? (<Loader />) : (
        <List>
        {data.map((item, id) => (
          <Item
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={id}
          >
            <ItemText>
              <ItemTitle>{item.title}</ItemTitle>
            </ItemText>
          </Item>
        ))}
      </List>
      )
      }
      <Footer />
    </>
  )
}

export default Gallery