import React, { useState } from "react";
import '../Styles/home.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import video from "../assets/video.mp4"
import product2 from '../assets/product2.webp';
import ProductList from '../Components/ProductList';
import ChatBot from "../Components/ChatBot";
import { BiDollar } from "react-icons/bi";
import { GiWoodenFence } from "react-icons/gi";
import QuotationForm from "../Components/QuotationForm";

import form1img from '../assets/form1img.png';
import workimg1 from '../assets/workimg1.png';
import workimg2 from '../assets/workimg2.png';
import workimg3 from '../assets/workimg3.png';



const Home = () => {

    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div className="homepage">
            <Header />

            <div className="section0">
                <video loop autoPlay muted loading="lazy" playsInline>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="text">
                    <h1>Saepes</h1>
                    <h2>Privatsphäre mit Stil</h2>

                    <p className="p1">WPC-Sichtschutzwände</p>
                    <p className="p2">Sicht- und Lärmschutz</p>
                    <p className="p3">Ideale Lösung für den Garten oder Terrasse</p>
                    <p className="p4">Privatsphäre und Komfort</p>
                </div>
            </div>




            <div className="hero">
                <div className="container1">
                    <h1>Entdecken Sie unsere WPC-Sichtschutzwände</h1>
                    <p>Mit unseren WPC-Sichtschutzwänden investieren Sie in Qualität und
                        Ästhetik. Unsere Produkte überzeugen durch ihre Robustheit,
                        Witterungsbeständigkeit und einfache Montage. Wählen Sie uns für Ihren
                        Garten und genießen Sie Privatsphäre und Stil zugleich.</p>
                    <hr />
                    <div className="bottom">
                        <div className="card">
                            <BiDollar className="icon" />
                            
                            <p>- Faire Preise</p>
                            <p>- Rechnungskauf</p>
                            <p>- Ratenzahlung bis zu 12 Monate</p>
                        </div>
                        <div className="card">
                            <GiWoodenFence className="icon" />
                            
                            <p>- Langlebig und pflegeleicht</p>
                            <p>- Verschiedene Farben</p>
                            <p>- Einfache Montage</p>
                            <p>- Witterungsbeständig</p>
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <img src={product2} alt="SAEPES Produkt" />
                </div>
            </div>


            <div className="form1">
                <div className="form-img">
                    <img src={form1img} alt="" />
                </div>
                <QuotationForm />
            </div>

            <div id="quomodal" className="quomodal" action="/service" method="POST">
                <div className="quomodal-content">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <div className="userinfo">
                        <input type="text" id="userinfo" name="name" className="search-input" placeholder="Name" />
                        <input type="mail" id="userinfo" name="email" className="search-input" placeholder="Email" />
                    </div>
                </div>
            </div>

            <section className="works">
                <h2>Wie Saepes funktioniert</h2>
                <p>In unserer Firma erhalten Sie kompetente Beratung und transparente
                    Budgetierung. Zudem empfehlen wir Ihnen die passenden Partner für Ihr
                    Projekt.
                </p>
                <div className="works-container">
                    <div className="container">
                        <img src={workimg2} alt="" className="img1" />
                        <h3><b>Budgetierung: </b></h3>
                        <p>Bei uns erhalten Sie hochwertige WPC-Sichtschutzwände zu fairen Preisen.
                            Wir bieten eine transparente Budgetierung, damit Sie genau wissen, was
                            Sie erwarten können. Vertrauen Sie uns, um Ihre Bedürfnisse innerhalb
                            Ihres Budgets zu erfüllen.</p>
                    </div>
                    <div className="container">
                        <img src={workimg1} alt="" className="img1" />
                        <h3><b>Beratung:</b></h3>
                        <p>Unsere Experten stehen Ihnen gerne zur Seite, um Ihnen bei der Auswahl
                            der perfekten WPC-Sichtschutzwände für Ihr Projekt zu helfen. Wir bieten
                            umfassende Beratung, damit Sie die richtige Entscheidung treffen können.</p>
                    </div>
                    <div className="container">
                        <img src={workimg3} alt="" className="img1" />
                        <h3><b>Partnerempfehlung:</b></h3>
                        <p>Wir arbeiten eng mit vertrauenswürdigen Partnern zusammen, um
                            sicherzustellen, dass Ihre WPC-Sichtschutzwände professionell
                            installiert werden. Verlassen Sie sich auf unsere Empfehlungen für
                            qualifizierte Partner, die Sie bei der Umsetzung Ihres Projekts
                            unterstützen.</p>
                    </div>
                </div>
            </section>


            <div className="service-container">
                <h1>Durchsuchen Sie beliebte Kategorien</h1>
                <div className="filter-container">
                    <label htmlFor="products"></label>
                    <div id="product-filter">

                    </div>
                </div>
                <div id="services-container">
                    <ProductList />
                </div>
            </div>


            <button id="chatButton" onClick={toggleChat}>Chat</button>
            <div className="chat" style={{ display: showChat ? 'block' : 'none' }}>
                <ChatBot onClose={toggleChat} />
            </div>

            <Footer />
        </div>
    );
}

export default Home;
