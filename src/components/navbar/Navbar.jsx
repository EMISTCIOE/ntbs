import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const [active, setActive] = useState("nav-list");
    const [toggle, setToggle] = useState("menu");
    const openMenu = () => {
        setActive('nav-list');
        active === 'nav-list' ? setActive('nav-list menu-active') : setActive('nav-list')
        toggle === "menu" ? setToggle('menu openmenu') : setToggle('menu');
    }

    function redirectToPage(page) {
        window.location.href = page;  // Redirect to the specified page
    }

    const smoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='header'>
                <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
                    <div id="logo-img">
                        <a onClick={() => smoothScroll('main')}><img src="images/logo.png" alt="NTBS" /></a>
                    </div>
                    <div className={active}>
                        <ul>
                            <li>
                                <a onClick={() => smoothScroll('about')}>About</a>
                            </li>
                            <li>
                                <a onClick={() => smoothScroll('saraswati_puja')}>Saraswati Puja</a>
                            </li>
                            <li>
                                <a onClick={() => smoothScroll('committee_members')}>Committee Members</a>
                            </li>
                            <li>
                                <a onClick={() => redirectToPage('/gallery')}>Gallery</a>
                            </li>
                            <li>
                                <a onClick={() => smoothScroll('contact_us')}>Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div onClick={openMenu} className={toggle} id="menu-btn">
                        <div>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar
