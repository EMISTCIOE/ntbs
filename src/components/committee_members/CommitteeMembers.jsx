import React from 'react'
import './committee_members.css'
import TeamCarousel from '../team_carousel/TeamCarousel'

function redirectToPage(page) {
    window.location.href = page;
}

const CommitteeMembers = () => {
  return (
    <div className='container' id='committee_members'>
      <div className="title-container">
        <h1 className='center section-heading'>Committee Members</h1>
        <h3 className='center'>Meet Our Executive Team</h3>
      </div>
      <TeamCarousel />
      <button className='viewBtn' onClick={() => redirectToPage('/committee_members')}>
        View All
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </div>
  )
}

export default CommitteeMembers