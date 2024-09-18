import React, { useState, useEffect } from "react";
import '../Styles/global.css';

import PhoneInput from 'react-phone-number-input/input';
import { useNavigate } from 'react-router-dom';

import ProductsData from '../Components/ProductsData';

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const categories = [...new Set(ProductsData.map(product => product.category))];
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        document.documentElement.style.overflow = 'hidden';
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null); // Close the modal
        setShowBookingForm(false); // Close booking form when modal is closed
        document.documentElement.style.overflow = 'auto';
    };

    const handleCloseBookingModal = () => {
        setShowBookingForm(false);
    };

    const handleBookNowClick = () => {
        document.documentElement.style.overflow = 'hidden';
        setShowBookingForm(true);
    };

    const handleRequestQuoteClick = () => {
        document.documentElement.style.overflow = 'auto';
        navigate('/contact');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append('selectedProductName', selectedProduct.name);

        fetch('/Backend/server2.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // Assuming `form` is a reference to the form element
                    event.target.reset(); // Reset the form fields

                    // Reset the phone number state
                    setPhoneNumber('');

                    // Add any additional state reset logic here if necessary
                    setShowBookingForm(false); // Example of state update
                } else {
                    console.error('Failed to submit form');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, []);

    const filteredProducts = selectedCategory === '' ?
        categories.map(cat => ProductsData.find(product => product.category === cat)) :
        ProductsData.filter(product => product.category === selectedCategory);

    return (
        <div>
            <div className="filter-container">
                <button onClick={() => handleCategorySelect('')} className={selectedCategory === '' ? 'active' : ''}>All</button>
                {categories.map(category => (
                    <button key={category} onClick={() => handleCategorySelect(category)} className={selectedCategory === category ? 'active' : ''}>{category}</button>
                ))}
            </div>
            <div className="services-container">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-container" onClick={() => handleProductClick(product)}>
                        <img className="product-image" src={product.image0} alt={product.name} />
                        <h3 className="product-name">{product.name}</h3>
                    </div>
                ))}
            </div>
            {/* Modal */}
            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <div className="moveimages">
                            <div className="modal-images">
                                {selectedProduct[`image${selectedImageIndex + 0}`] && (
                                    <img
                                        className="modal-image"
                                        src={selectedProduct[`image${selectedImageIndex + 0}`]}
                                        alt={selectedProduct.name}
                                    />
                                )}
                            </div>
                            <div className="moreimg">
                                {selectedProduct.image0 && (
                                    <img
                                        src={selectedProduct.image0}
                                        alt={selectedProduct.name}
                                        className="im"
                                        onClick={() => handleImageClick(0)}
                                    />
                                )}
                                {selectedProduct.image1 && (
                                    <img
                                        src={selectedProduct.image1}
                                        alt={selectedProduct.name}
                                        className="im"
                                        onClick={() => handleImageClick(1)}
                                    />
                                )}
                                {selectedProduct.image2 && (
                                    <img
                                        src={selectedProduct.image2}
                                        alt={selectedProduct.name}
                                        className="im"
                                        onClick={() => handleImageClick(2)}
                                    />
                                )}
                                {selectedProduct.image3 && (
                                    <img
                                        src={selectedProduct.image3}
                                        alt={selectedProduct.name}
                                        className="im"
                                        onClick={() => handleImageClick(3)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="product-details-container">
                            <h2 className="proname">{selectedProduct.name}</h2>
                            <p className="protext">{selectedProduct.text}</p>
                            <div className="product-details-actions">
                                <button onClick={handleBookNowClick}>Book Now</button>
                                <button onClick={handleRequestQuoteClick}>Request A Quote</button>
                            </div>
                            {showBookingForm && (
                                <form className="booking-form" onSubmit={handleSubmit}>
                                    <div className="bookingform">
                                        {/* Booking form inputs */}
                                        <span className="close" onClick={handleCloseBookingModal}>&times;</span>
                                        <div className="row">
                                            <img className="product-image" src={selectedProduct.image0} alt={selectedProduct.name} />
                                            <div className="text">
                                                <h3 className="product-name">{selectedProduct.name}</h3>
                                                <p className="protext">{selectedProduct.text}</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <input type="text" name="name" placeholder="Name" required />
                                            <input type="email" name="email" placeholder="Email" required />
                                            <PhoneInput
                                                name="phone"
                                                placeholder="Phone"
                                                value={phoneNumber}
                                                onChange={setPhoneNumber}
                                                required
                                            />
                                            <textarea name="message" placeholder="Message" required></textarea>
                                        </div>

                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            )}
                            <table className="product-details-table">
                                <tbody>
                                    <tr>
                                        <th>Size:</th>
                                        <td>{selectedProduct.size}</td>
                                    </tr>
                                    <tr>
                                        <th>Weight:</th>
                                        <td>{selectedProduct.weight}</td>
                                    </tr>
                                    <tr>
                                        <th>Color:</th>
                                        <td>{selectedProduct.color}</td>
                                    </tr>
                                    <tr>
                                        <th>WPC Components:</th>
                                        <td>{selectedProduct.wpcComponents}</td>
                                    </tr>
                                    <tr>
                                        <th>Item Number:</th>
                                        <td>{selectedProduct.itemNumber}</td>
                                    </tr>
                                    <tr>
                                        <th>Delivery Time:</th>
                                        <td>{selectedProduct.deliveryTime}</td>
                                    </tr>
                                    {/* Add more product details as needed */}
                                </tbody>
                            </table>
                            <div className="sideims">
                                <img className="sideim" src={selectedProduct.sideim0} />
                                <img className="sideim" src={selectedProduct.sideim1} />
                                <img className="sideim" src={selectedProduct.sideim2} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
