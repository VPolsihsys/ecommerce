import React, { useState } from "react";
import '../../Styles/allproducts.css';

import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input/input';

import ProductsData from '../../Components/ProductsData';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Decking = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

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
        document.documentElement.style.overflow = 'auto'; // Restore overflow property to enable scrolling
    };

    const handleCloseBookingModal = () => {
        setShowBookingForm(false);
    };

    const handleBookNowClick = () => {
        document.documentElement.style.overflow = 'hidden';
        setShowBookingForm(true);
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

    // Filter products based on category
    const gardenTileProducts = ProductsData.filter(product => product.category === 'DECKING');

    return (
        <div className="allproducts">

            <Header />
            <div className="heading">
                <Link to="/product">
                    <h1>Products</h1>
                </Link>
                <p> /</p>
                <Link to="/products/decking">
                    <h1>Decking</h1>
                </Link>
            </div>
            <div className="allproducts-containers">
                {gardenTileProducts.map((product, index) => (
                    <div key={index} className="product-container" onClick={() => handleProductClick(product)}>
                        <img className="product-image" src={product.image0} alt={product.name} />
                        <h3 className="product-name">{product.name}</h3>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div className="allproductsmodal">
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
                                <Link to="/contact">
                                    <button>Request A Quote</button>
                                </Link>
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

            <Footer />

        </div>
    );
};

export default Decking;
