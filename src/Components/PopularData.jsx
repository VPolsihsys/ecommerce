import React, { useState } from "react";
import '../Styles/global.css';
import { Link } from 'react-router-dom';
import shop from '../assets/shop.webp';
import shop1 from '../assets/shop1.webp';
import shop2 from '../assets/shop2.webp';
import shop3 from '../assets/shop3.webp';
import hall from '../assets/hall.webp';
import hall1 from '../assets/hall1.webp';
import hall2 from '../assets/hall2.webp';
import office3 from '../assets/office3.webp';
import office from '../assets/office.webp';
import office1 from '../assets/office1.webp';
import office2 from '../assets/office2.webp';
import office4 from '../assets/office4.webp';



const PopData = [
    {
        title: 'Shop Decoration',
        text: 'Factory Price Eco-Wood Plastic Composite Fences Panels PVC Fences',
        image0: shop,
        image1: shop1,
        image2: shop2,
        image3: shop3,
        category: 'Wood Composite Fences',
        feature: [
            'Moisture Resistance',
            'Rot Resistance',
            'Split Resistance',
            'Distortion Resistance',
            'UV Resistance',
            'Fading Resistance',
            'Outdoor Resistance',
            'No need painting',
            'Durable/life time',
            'Structure',
            'Environment Effect'
        ],
        WPC: {
            "Moisture Resistance": "Waterproof",
            "Rot Resistance": "Antiseptic",
            "Split Resistance": "No cracked",
            "Distortion Resistance": "Almost no contraction or expansion",
            "UV Resistance": "High Grade UV Resistance",
            "Fading Resistance": "Almost no",
            "Outdoor Resistance": "Great",
            "No need painting": "No need",
            "Durable/life time": "> 15 years",
            "Structure": "Extruded by various mould",
            "Environment Effect": "Recyclable 100%"
        },
        Wood: {
            "Moisture Resistance": "Water absorptive",
            "Rot Resistance": "easy corrode if not do special treating",
            "Split Resistance": "Cracked for weather effect",
            "Distortion Resistance": "Distoring effected by change of moisture and temperature",
            "UV Resistance": "Easily effected by UV",
            "Fading Resistance": "Easy to fade",
            "Outdoor Resistance": "Only few treated wood can adapt",
            "No need painting": "Need paint periodically",
            "Durable/life time": "< 3 years",
            "Structure": "Simplex",
            "Environment Effect": "Consume woods"
        }
    },
    {
        title: 'Hall Decoration',
        text: 'Factory Price Eco-Wood Plastic Composite Fences Panels PVC Fences',
        image0: hall,
        image1: hall1,
        image2: hall2,
        image3: office3,
        category: 'Wood Composite Fences',
        feature: [
            'Moisture Resistance',
            'Rot Resistance',
            'Split Resistance',
            'Distortion Resistance',
            'UV Resistance',
            'Fading Resistance',
            'Outdoor Resistance',
            'No need painting',
            'Durable/life time',
            'Structure',
            'Environment Effect'
        ],
        WPC: {
            "Moisture Resistance": "Waterproof",
            "Rot Resistance": "Antiseptic",
            "Split Resistance": "No cracked",
            "Distortion Resistance": "Almost no contraction or expansion",
            "UV Resistance": "High Grade UV Resistance",
            "Fading Resistance": "Almost no",
            "Outdoor Resistance": "Great",
            "No need painting": "No need",
            "Durable/life time": "> 15 years",
            "Structure": "Extruded by various mould",
            "Environment Effect": "Recyclable 100%"
        },
        Wood: {
            "Moisture Resistance": "Water absorptive",
            "Rot Resistance": "easy corrode if not do special treating",
            "Split Resistance": "Cracked for weather effect",
            "Distortion Resistance": "Distoring effected by change of moisture and temperature",
            "UV Resistance": "Easily effected by UV",
            "Fading Resistance": "Easy to fade",
            "Outdoor Resistance": "Only few treated wood can adapt",
            "No need painting": "Need paint periodically",
            "Durable/life time": "< 3 years",
            "Structure": "Simplex",
            "Environment Effect": "Consume woods"
        }
    },
    {
        title: 'Office Decoration',
        text: 'Factory Price Eco-Wood Plastic Composite Fences Panels PVC Fences',
        image0: office,
        image1: office1,
        image2: office2,
        image3: office4,
        category: 'Wood Composite Fences',
        feature: [
            'Moisture Resistance',
            'Rot Resistance',
            'Split Resistance',
            'Distortion Resistance',
            'UV Resistance',
            'Fading Resistance',
            'Outdoor Resistance',
            'No need painting',
            'Durable/life time',
            'Structure',
            'Environment Effect'
        ],
        WPC: {
            "Moisture Resistance": "Waterproof",
            "Rot Resistance": "Antiseptic",
            "Split Resistance": "No cracked",
            "Distortion Resistance": "Almost no contraction or expansion",
            "UV Resistance": "High Grade UV Resistance",
            "Fading Resistance": "Almost no",
            "Outdoor Resistance": "Great",
            "No need painting": "No need",
            "Durable/life time": "> 15 years",
            "Structure": "Extruded by various mould",
            "Environment Effect": "Recyclable 100%"
        },
        Wood: {
            "Moisture Resistance": "Water absorptive",
            "Rot Resistance": "easy corrode if not do special treating",
            "Split Resistance": "Cracked for weather effect",
            "Distortion Resistance": "Distoring effected by change of moisture and temperature",
            "UV Resistance": "Easily effected by UV",
            "Fading Resistance": "Easy to fade",
            "Outdoor Resistance": "Only few treated wood can adapt",
            "No need painting": "Need paint periodically",
            "Durable/life time": "< 3 years",
            "Structure": "Simplex",
            "Environment Effect": "Consume woods"
        }
    }
];


const PopularData = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = "hidden";
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = "auto";
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };


    return (
        <div>
            <div className="prices-container">
                {PopData.map((product, index) => (
                    <div
                        key={index}
                        className="product-container"
                        onClick={() => handleProductClick(product)}
                    >
                        <img className="product-image" src={product.image0} alt={product.title} />
                        <h3 className="product-name">{product.title}</h3>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
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
                            <h2 className="proname">{selectedProduct.title}</h2>
                            <p className="protext">{selectedProduct.text}</p>
                            <div className="product-details-actions">
                                <Link to="/contact">
                                    <button>Request A Quote</button>
                                </Link>
                            </div>
                            <table className="product-details-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>WPC</th>
                                        <th>Wood</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedProduct.feature.map((feature, index) => (
                                        <tr key={index}>
                                            <td>{feature}</td>
                                            <td>{selectedProduct.WPC[feature]}</td>
                                            <td>{selectedProduct.Wood[feature]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopularData;