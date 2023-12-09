import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      var footer = document.querySelector('.avi-footer');
      var footerPosition = footer.getBoundingClientRect().top;
      var screenPosition = window.innerHeight;

      if (footerPosition < screenPosition) {
        footer.classList.add('show-footer');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='avi-footer-main'>
      <hr />
      <Container fluid className='avi-footer'>
        <Row className='avi-footer-container'>
           <Col md={4} lg={4} xs={12} className="avi-contactus">
                        <h1>Contact Us</h1> <br />
                        <p className="avi-footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet quis ullam. Veniam quam quis iure quae dicta, sint ab?</p>
                        <a href="tel:+91 9874561230" className='avi-contact-link'><i className='fa fa-phone'></i>&emsp;+3434-837-4634</a>
                        <p className="avi-footer-text">
                            <a href="mailto: abc@example.com" className='avi-contact-link'><i className='fa fa-envelope'></i>&emsp;abc@example.com</a>
                            
                            </p>
                    </Col>
                    <Col md={4} lg={4} xs={12} className='avi-footer-about'>
                        <h4 className="mb-4">About Us</h4>
                        <ul>
                            <li className='about-text'><a href="#">Home</a></li>
                            <li className='about-text'><a href="#">Disease Prediction</a></li>
                            <li className='about-text'><a href="#">Health</a></li>
                            <li className='about-text'><a href="#">Doctors</a></li>
                        </ul>
                    </Col>
                    <Col md={4} lg={4} xs={12} className='avi-footer-socialmedia'>
                        <h4 className="mb-4">We are in Social Media</h4>
                        <div className='hsr-footer-social-media'>
                            <a href="#"><i class="fa-brands fa-facebook fa-2x p-3"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram fa-2x p-3"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter fa-2x p-3"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in fa-2x p-3"></i></a>
                        </div>
                    </Col>
        </Row>
      </Container>
      <hr />
      <div className="avi-copyright-sec">
        <p>
          @2022 Copyright by
          <a href="#">Medicare</a>
          <p>By Mohit Lamba</p>
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
