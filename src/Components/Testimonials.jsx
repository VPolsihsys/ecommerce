import React, { useState } from "react";
import '../Styles/global.css';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonialsData = [
    {
        text: "SAEPES hat revolutioniert, wie wir Nachhaltigkeit in unseren Bauprojekten angehen. Ihre WPC-Materialien sind nicht nur umweltfreundlich, sondern auch unglaublich langlebig, was sie zu einer perfekten Wahl für unsere grünen Bauprojekte macht.",
        name: "Robert Anderson",
    },
    {
        text: "Ich bin beeindruckt von der Qualität und Vielseitigkeit der Produkte von SAEPES. Als Innenarchitekt suche ich ständig nach Materialien, die Ästhetik mit Nachhaltigkeit kombinieren, und SAEPES erfüllt beide Anforderungen.",
        name: "Sophia White",
    },
    {
        text: "Die Verwendung von SAEPES' WPC-Materialien hat unser Möbelherstellungsgeschäft grundlegend verändert. Die Materialien sind nicht nur umweltfreundlich, sondern bieten auch hervorragende Leistung und ästhetischen Reiz, wodurch unsere Produkte auf dem Markt herausragen.",
        name: "David Thompson",
    },
    {
        text: "Das Engagement von SAEPES für Umweltschutz ist lobenswert. Wir haben ihre WPC-Materialien in unsere Landschaftsprojekte integriert, und die Ergebnisse waren fantastisch. Unsere Kunden lieben den umweltfreundlichen Aspekt, und wir schätzen die einfache Installation und geringe Wartung.",
        name: "Jennifer Roberts",
    },
];



const Testimonials = () => {




    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handlePrev = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };



    return (
        <div>
            <div className="testimonial">
                <div className="heading">
                    WAS UNSERE KUNDEN SAGEN
                </div>

                <div className="testimonial">
                    <p className="testimonial-text">{testimonialsData[currentTestimonial].text}</p>
                    <p className="testimonial-name">{testimonialsData[currentTestimonial].name}</p>
                </div>
                <div className="arrows">
                    <button onClick={handlePrev} className="btn1"><IoIosArrowBack /></button>
                    <button onClick={handleNext} className="btn2"><IoIosArrowForward /></button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
