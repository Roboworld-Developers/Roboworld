import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='resources'>
                <h2>Resources</h2>
                <ul>
                <li><a href='#home'>Press</a></li>
                <li><a href='#about'>FAQs</a></li>
                <li><a href='#services'>Oportunities</a></li>
                </ul>
            </div>
            <div className='footer-socials'>
                <h2>Follow Us</h2>
                <ul>
                    <li><a href='https://www.facebook.com'>Facebook</a></li>
                    <li><a href='https://www.twitter.com'>Twitter</a></li>
                    <li><a href='https://www.instagram.com'>Instagram</a></li>
                    <li><a href='https://www.linkedin.com'>LinkedIn</a></li>
                    
                </ul>
            </div>
            <div className='news-letter'>
                <h2>Newsletter</h2>
                <input type="text" placeholder='Email'/>
                <button type='submit'>Subscribe</button>
                <ul>
                <li>
                    <a href='mailto:info@roboworld.co.za'><i class='fa-regular fa-envelope'></i> info@roboworld.co.za</a>
                </li>
                <li>
                    <a href='tel:+27123456789'><i class='fas fa-phone'></i> +27 81 523 6000</a>
                </li>
            </ul>                
            </div>
        </div>
        <div className='footer-bottom'>
            <p>&copy; 2024 RoboWorld. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer