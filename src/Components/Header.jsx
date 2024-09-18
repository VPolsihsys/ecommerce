import React, { useState } from 'react';
import '../Styles/global.css';

import ProductsData from './ProductsData';

/* images */
import logoimg from "../assets/logo1.png";

/* icons */
import { IoIosCloseCircle } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { FaHeart, FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
    const [active, setActive] = useState("menu");
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const showNavbar = () => {
        setActive("menu showMenu");
        document.body.style.overflow = "hidden";
    };

    const removeNavbar = () => {
        setActive("menu");
        document.body.style.overflow = "";
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible); // Toggle search visibility
    };

    const closeSearch = () => {
        setSearchVisible(false);
        setSearchQuery("");
        setFilteredProducts([]);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        let filteredResults;
        if (query.trim() === "") {
            filteredResults = [];
        } else {
            filteredResults = ProductsData.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }

        setFilteredProducts(filteredResults);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setSearchQuery("");
        }
    };

    return (
        <div>

            <div className="Navbar">
                <div className="logodiv">
                    <a href="/"><img loading="lazy" src={logoimg} alt="logo" /></a>
                </div>
                <div className={active}>
                    <div className="lists">
                        <li className={location.pathname === '/' ? 'active' : ''}><a href="/">Home</a></li>
                        <li className={location.pathname === '/about' ? 'active' : ''}><a href="/about">About</a></li>
                        <li className={location.pathname === '/product' ? 'active' : ''}><a href="/product">Products</a></li>
                        <li className={location.pathname === '/contact' ? 'active' : ''}><a href="/contact">Contact</a></li>
                    </div>
                    <div className="closeIcon" onClick={removeNavbar}>
                        <IoIosCloseCircle className='icon' />
                    </div>
                </div>
                <div className='iconshead'>
                    <div className="lists">
                        <li className={location.pathname === '/search' ? 'active' : ''} onClick={toggleSearch}><FaSearch className='icon' /></li>
                    </div>
                </div>
                <div className="toggleIcon" onClick={showNavbar}>
                    <CgMenuRight className='icon' />
                </div>
            </div>
            {searchVisible && (
                <div className="searchBar">
                    <span className="close" onClick={closeSearch}>&times;</span>
                    <input type="text" value={searchQuery} placeholder='Search here' onChange={handleSearchChange} onKeyPress={handleKeyPress} />
                </div>
            )}
            <div className={`search-container ${searchVisible ? 'visible' : ''}`}>
                {searchQuery.trim() === "" ?
                    filteredProducts.map((product, index) => (
                        <a key={index} href={`/products/${product.category.replace(/\s+/g, '').toLowerCase()}`} className="product">
                            <div className="productcont">
                                <img className="product-image" src={product.image0} alt="" />
                                <h3 className="product-name">{product.name}</h3>
                            </div>
                        </a>
                    )) :
                    filteredProducts.map((product, index) => (
                        <a key={index} href={`/products/${product.category.replace(/\s+/g, '').toLowerCase()}`} className="product">
                            <div className="productcont">
                                <img className="product-image" src={product.image0} alt="" />
                                <h3 className="product-name">{product.name}</h3>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default Header;
