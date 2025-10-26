import {React} from 'react'
import { useForm } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'

const Contact = () => {
  const [state, handleSubmit] = useForm("mgejgldo");
  const navigate = useNavigate()
  if (state.succeeded) {
    navigate("/message_sent")
}
  return (
    <>
      <div className='container' id='contact_us'>
        <div className="title-container">
          <h1 className="section-heading center">Contact Us</h1>
          <div className="line"></div>
        </div>
        <div className="contact__wrapper">
          <div className="contact__container grid">
            <div className="contact__information">
              <span className='contact__icon'><MdOutlineMail /></span>
              <div>
                <div>
                  <h3 className="contact__title">Email</h3>
                  <a href="mailto:ntbs@tcioe.edu.np" target="_blank" rel="noopener noreferrer">
                    <span
                      className="contact__subtitle button-small button--link">
                      ntbs@tcioe.edu.np</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__information">
              <span className='contact__icon'><RiMessengerLine /></span>
              <div>
                <div>
                  <h3 className="contact__title">Messenger</h3>
                  <a href="https://m.me/ntbsthapathali" target="_blank" rel="noopener noreferrer">
                    <span
                      className="contact__subtitle button--flex button--link">
                      Write a message <span className='button__icon'><BsArrowRightShort /></span></span>
                  </a>
                </div>
              </div>
            </div>


            <div className="contact__information">
              <span className='contact__icon'><MdOutlineLocationOn /></span>
              <div>
                <div>
                  <h3 className="contact__title">Location</h3>
                  <a href="https://maps.app.goo.gl/Ca2xbEgaontYHj4a9" target="_blank" rel="noopener noreferrer">
                    <span
                      className="contact__subtitle button--link">
                      NTBS, Thapathali Campus, Kathmandu</span>
                  </a>
                </div>
              </div>
            </div>

            {/* END OF CONTACT OPTIONS */}
          </div>
          <div >

          </div>
          <form onSubmit={handleSubmit} className="form__container">
            <div className="input_wrapper">
              <input className="form_input" required type="text" id="name" name="Name" placeholder=''/>
              <label className='form_label' htmlFor="name">Name</label>
            </div>
            <div className="input_wrapper">
              <input className="form_input" type="text" id="number" name="Number" autoComplete="none" placeholder=''/>
              <label className='form_label' htmlFor="number">Contact Number</label>
            </div>
            <div className="input_wrapper">
              <input className="form_input" required type="email" id="email" name="Email" placeholder=''/>
              <label className='form_label' htmlFor="email">Email</label>
            </div>
            <div className="input_wrapper">
              <input className="form_input" type="text" id="address" name="Address" placeholder=''/>
              <label className='form_label' htmlFor="address">Address</label>
            </div>
            <div className="input_wrapper">
              <input className="form_input" type="text" id="subject" name="Subject" placeholder=''/>
              <label className='form_label' htmlFor="subject">Subject</label>
            </div>
            <div className="input_wrapper">
              <textarea className="form_input form_textarea" required id="message" name="Message" placeholder=''/>
              <label className='form_label' htmlFor="message">Message</label>
            </div>
            <div className="input_wrapper">
              <button type="submit" id='submit_btn' disabled={state.submitting}>Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Contact
