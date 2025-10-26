import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import SaraswatiPuja from '../components/saraswati_puja/Saraswati_Puja'
// import Sponsors from '../components/sponsors/Sponsors'
import CommitteeMembers from '../components/committee_members/CommitteeMembers'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <SaraswatiPuja />
      {/* <Sponsors /> */}
      <CommitteeMembers />
      <Contact />
      <Footer />
    </>  
  )
}

export default Home