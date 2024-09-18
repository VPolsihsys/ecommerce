import React, { useEffect } from 'react';
import '../Styles/about.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import teams from '../assets/teams.png';

import teamw from '../assets/teamw.png';
import userw from '../assets/userw.png';
import productw from '../assets/productw.png';
import searchw from '../assets/searchw.png';
import product1 from '../assets/product.webp';
import product2 from '../assets/product1.webp';
import product3 from '../assets/product2.webp';

const About = () => {

    useEffect(() => {
        const sectionHeadings = document.querySelectorAll(".section3");
        const contentSections = document.querySelectorAll(".contents");

        // Initialize: Show the "About Us" section initially
        contentSections[0].style.display = "block";
        sectionHeadings[0].classList.add("active"); // Add 'active' class to the first section heading

        // Add a click event listener to each section heading
        sectionHeadings.forEach((heading, index) => {
            heading.addEventListener("click", () => {
                // Hide all content sections
                contentSections.forEach((content) => {
                    content.style.display = "none";
                });

                // Remove 'active' class from all section headings
                sectionHeadings.forEach((section) => {
                    section.classList.remove("active");
                });

                // Show the content section corresponding to the clicked heading
                contentSections[index].style.display = "block";

                // Add 'active' class to the clicked section heading
                sectionHeadings[index].classList.add("active");
            });
        });

        // Cleanup function to remove event listeners
        return () => {
            sectionHeadings.forEach((heading, index) => {
                heading.removeEventListener("click", () => { });
            });
        };
    }, []);

    return (
        <div className='aboutsec'>

            <Header />

            <div className="section">
                <div>
                    <h1>Willkommen bei SAEPES</h1>
                    <p>SAEPES widmet sich der Pionierarbeit im Umweltschutz durch innovative Lösungen. Unser Ziel ist es, die Produktion und Nutzung von Materialien zu revolutionieren und zu einer grüneren Zukunft für alle beizutragen. Erfahren Sie, wie SAEPES Ihrem Unternehmen helfen kann, im nachhaltigen Zeitalter erfolgreich zu sein.</p>
                    <button><a href="contact.html">Kontaktiere uns</a></button>
                </div>
                <div>
                    <img type="image/" src={teams} alt="SAEPES Bild" />
                </div>
            </div>

            <div className="team">
                <div className="content">
                    <img src={teamw} alt="SAEPES Team" />
                    <h4>50+</h4>
                    <p>Hochqualifizierte Mitarbeiter</p>
                </div>
                <div className="content">
                    <img src={userw} alt="SAEPES Benutzer" />
                    <h4>50,000+</h4>
                    <p>Zufriedene Benutzer</p>
                </div>
                <div className="content">
                    <img src={productw} alt="SAEPES Aufträge" />
                    <h4>5,000</h4>
                    <p>Durchschnittliche Bestellungen pro Woche</p>
                </div>
                <div className="content">
                    <img src={searchw} alt="SAEPES Verbindungen" />
                    <h4>15,000</h4>
                    <p>Erfolgreiche Verbindungen</p>
                </div>
            </div>


            <div id="section3">
                <div className="questions">
                    <div className="section3" id="who">
                        <h2>Über uns</h2>
                    </div>
                    <div className="section3" id="what">
                        <h2>Unsere Mission</h2>
                    </div>
                    <div className="section3" id="goals">
                        <h2>Unsere Vision</h2>
                    </div>
                </div>

                <div className="answers">
                    <div className="contents" id="who-content">
                        <div className="content-inner">
                            <div className="left">
                                <p>SAEPES geht über traditionelle Geschäftsparadigmen hinaus; wir sind Pioniere im Umweltschutz. Mit einem engagierten Team von Experten kombinieren wir Technologie und Nachhaltigkeit, um Unternehmen auf dem Weg zu einer grüneren Zukunft zu begleiten.</p>
                                <p>Bei SAEPES sind wir mehr als nur ein Unternehmen; wir sind Partner beim Aufbau einer nachhaltigen Zukunft.</p>
                            </div>
                            <div className="right">
                                <img type="image/webp" src={product1} alt="SAEPES Team" />
                            </div>
                        </div>
                    </div>
                    <div className="contents" id="what-content">
                        <div className="content-inner">
                            <div className="left">
                                <p>Unsere Mission ist es, Unternehmen zu befähigen, im nachhaltigen Zeitalter erfolgreich zu sein. Wir bieten umfassende Lösungen, die jeden Aspekt der Umweltschonung umfassen. Von der Entwicklung innovativer Materialien bis hin zu umweltbewussten Marketingstrategien helfen wir Unternehmen, erfolgreich zu sein und gleichzeitig den Planeten zu schützen.</p>
                                <p>SAEPES bietet eine komplette Palette von Dienstleistungen zur Erreichung Ihrer Nachhaltigkeitsziele. Von der Entwicklung umweltfreundlicher Produkte bis hin zu grünen Marketingkampagnen sind wir Ihr Partner in Sachen Nachhaltigkeit.</p>
                            </div>
                            <div className="right">
                                <img type="image/webp" src={product2} alt="SAEPES Dienstleistungen" />
                            </div>
                        </div>
                    </div>
                    <div className="contents" id="goals-content">
                        <div className="content-inner">
                            <div className="left">
                                <p>SAEPES envisioniert eine Zukunft, in der Unternehmen in Harmonie mit der Umwelt gedeihen. Wir streben danach, die treibende Kraft hinter nachhaltiger Innovation zu sein und Unternehmen auf dem Weg zum Erfolg zu unterstützen, während wir den Planeten für zukünftige Generationen erhalten.</p>
                                <p>Wir visionieren eine grünere Zukunft, in der Unternehmen blühen, und wir sind entschlossen, den Weg zur Umweltschonung zu führen.</p>
                            </div>
                            <div className="right">
                                <img type="image/webp" src={product3} alt="SAEPES Vision" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="people">
                <div className="people-text">
                    <h2>Erleben Sie Umweltexzellenz mit SAEPES!</h2>
                    <p>Bei SAEPES sind wir bestrebt, modernste Umweltlösungen anzubieten, die Nachhaltigkeit und Innovation priorisieren. Unser kundenorientierter Ansatz stellt sicher, dass Ihre spezifischen Bedürfnisse nicht nur erfüllt, sondern übertroffen werden. Mit einem Fokus auf Vertrauen, Transparenz und Exzellenz im Service streben wir danach, langfristige Partnerschaften mit unseren geschätzten Kunden aufzubauen.</p>
                </div>

            </div>




            <Footer />
        </div>
    )
}


export default About
