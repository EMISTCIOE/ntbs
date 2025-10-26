import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
    const facebook = process.env.REACT_APP_FACEBOOK_URL
    const instagram = process.env.REACT_APP_INSTAGRAM_URL
    const today = new Date();
    return (
        <>
            <div className="footer container">
                <div className='top'>
                    <h2>NTBS, Thapathali Campus</h2>
                    <div className="flex-row">
                        <h4>Connect with us on :</h4>
                        <span>
                            <a href={facebook} target='_blank' rel="noopener noreferrer"><FaFacebook /></a>
                        </span>
                        <span>
                            <a href={instagram} target='_blank' rel="noopener noreferrer"><GrInstagram /></a>
                        </span>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <p><span>&#169;</span> {today.getFullYear()} NTBS. All rights reserved.</p>
                    </div>
                    <div className="flex-row-base">
                        Crafted with ❤ By :
                        <a href="https://guptaanmol.com.np" target='_blank' rel="noopener noreferrer">Anmol Gupta</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
