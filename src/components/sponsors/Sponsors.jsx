import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
`

const Wrapper = styled.div`
  width: 200px;
  height: 250px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
`

const Img = styled.img`
    // width: 50%;
    // height: 100%;
`

const Sponsors = () => {
  return (
    <>
    <div className='container'>
    <div className="title-container">
        <h1 className='center section-heading'>Our Sponsors</h1>
        <h3 className='center'>For 24th Saraswati Puja & Cultural Program</h3>
    </div>

    <Container>
        <Wrapper>
        <Img src="images/sponsors/1.png" alt="sponsor" />
        <h3>Title Sponsor</h3>
    </Wrapper>
    <Wrapper>
        <Img src="images/sponsors/1.png" alt="sponsor" />
        <h3>Accomodation Partner</h3>
    </Wrapper>
    <Wrapper>
        <Img src="images/sponsors/1.png" alt="sponsor" />
        <h3>Title Sponsor</h3>
    </Wrapper>
    <Wrapper>
        <Img src="images/sponsors/1.png" alt="sponsor" />
        <h3>Title Sponsor</h3>
    </Wrapper>
    <Wrapper>
        <Img src="images/sponsors/1.png" alt="sponsor" />
        <h3>Title Sponsor</h3>
    </Wrapper>
    </Container>
    </div>
  </>
  )
}

export default Sponsors
