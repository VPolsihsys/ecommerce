import React, { useState } from 'react';

const QuotationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('');

    const handleSubmit = () => {
        // Send data to server.php
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('product', product);

        fetch('Backend/server.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                console.log('Data sent to server:');
                // Reset form inputs
                setName('');
                setEmail('');
                setProduct('');
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    };

    return (
<form>
    <h1>KOSTENLOSE ANGEBOTE</h1>
    <div className="form-content">
        <div className="inputs">
            <div className="form-labels1">
                <label htmlFor="name">Geben Sie Ihren Namen ein</label>
                <input type="text" id="name" className="search-input" placeholder="Geben Sie Ihren Namen ein" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-labels1">
                <label htmlFor="email">Geben Sie Ihre E-Mail-Adresse ein</label>
                <input type="email" id="email" className="search-input" placeholder="Geben Sie Ihre E-Mail-Adresse ein" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
        </div>
        <div className="form-labels">
            <label htmlFor="product">Welches Produkt benötigen Sie?</label>
            <input type="text" id="product" className="search-input" placeholder="Beginnen Sie mit der Eingabe, um zu suchen" list="products" value={product} onChange={e => setProduct(e.target.value)} />
            <datalist id="products">
                <option value="GARDEN FENCE" />
                <option value="WPC TRADITIONAL DECKING" />
                <option value="WPC 3D EMBOSSING DECKING" />
                <option value="WPC CO-EXTRUSION DECKING" />
                <option value="WPC WANDPANEEL (Outdoor)" />
                <option value="WPC DIY DECKING TILE" />
            </datalist>
        </div>
    </div>
    <button type="button" onClick={handleSubmit}>Absenden</button>
</form>

    );
};

export default QuotationForm;
