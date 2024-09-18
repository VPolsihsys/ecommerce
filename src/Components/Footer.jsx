import React from 'react'
import '../Styles/global.css';

import logo from "../assets/logo.jpeg"

/*icons*/
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";


const Footer = () => {

    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/profile.php?id=61555534807760');
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/saepes_gartenprodukte?igsh=bXkzMjA3ZXJrbTZw&utm_source=qr');
    };

    const handleTiktokClick = () => {
        window.open('https://www.tiktok.com/company/');
    };

    return (
        <div className='footerall'>
            <div className="footer">
                <div className="left">
                    <img loading="lazy" src={logo} alt="" />
                    <h3>Contact</h3>
                    <a href="tel:+0765654814">+0765654814</a>
                    <a href="mailto:support@saepes.com">support@saepes.com</a>
                    <p>Landstrasse 61, 5415 Nussbaumen, Switzerland</p>
                </div>
                <div className="right">
                    <div className="one">
                        <h3>Overview</h3>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/product">Products</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="one">
                        <h3>Products</h3>
                        <a href="/products/fence">Garden Fence</a>
                        <a href="/products/panelOutdoor">WPC Wall Panel(Outdoor)</a>
                        <a href="/products/decking">WPC Decking</a>
                        <a href="/products/tile">WPC DIY Tile</a>
                    </div>
                    <div className="one">
                        <h3>Legal</h3>
                        <a href="/privacy">Privacy policy</a>
                        <a href="/terms">terms & condition</a>
                        <a href="/faq">FAQs</a>
                        <div className="socials">
                            <FaFacebook className='social soone' onClick={handleFacebookClick} />
                            <FaInstagram className='social sotwo' onClick={handleInstagramClick} />
                            <FaTiktok className='social sothree' onClick={handleTiktokClick} />
                        </div>
                    </div>
                </div>
            </div>
            <p className='copy'>&copy; 2024 Saepes. All rights reserved.</p>
        </div>
    )
}

export default Footer
