import React, { useState } from 'react';
import '../Styles/global.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Faq = () => {
    const [visibleAnswers, setVisibleAnswers] = useState({});

    const toggleAnswer = (index) => {
        setVisibleAnswers((prevVisibleAnswers) => ({
            ...prevVisibleAnswers,
            [index]: !prevVisibleAnswers[index],
        }));
    };

    return (
        <div style={{ backgroundColor: "white" }}>
            <Header />
            <div className="faqs">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className="faq">
                <div className="one">
                    <div className="section ">

                        <div className="question" onClick={() => toggleAnswer(1)}>Q1: Is my payment safe?</div>
                        <div className={`answer ${visibleAnswers[1] ? 'visible' : ''}`}>A1: Yes! We guarantee your payment security</div>

                        <div className="question" onClick={() => toggleAnswer(2)}>Q2: Are you offer free samples?</div>
                        <div className={`answer ${visibleAnswers[2] ? 'visible' : ''}`}>A2: Yes,We do! But delivery cost paid by clients.</div>

                        <div className="question" onClick={() => toggleAnswer(3)}>Q3: Compared to real wood, what are the advantage of WPC?</div>
                        <div className={`answer ${visibleAnswers[3] ? 'visible' : ''}`}>A3: Waterproof, Fire-retarding, Termite proof, Recycled, Nature wood grain, Low maintenance. Easy to install, no toxic released.</div>

                        <div className="question" onClick={() => toggleAnswer(4)}>Q4: What is the delivery time?</div>
                        <div className={`answer ${visibleAnswers[4] ? 'visible' : ''}`}>A4: Within 15-25 days after receipt of your order</div>

                        <div className="question" onClick={() => toggleAnswer(5)}>Q5:  Are wood plastic composite products environmentally friendly?</div>
                        <div className={`answer ${visibleAnswers[5] ? 'visible' : ''}`}>A5: Yes. Because WPC will not splinter, warp or fade the way wood does, it dramatically reduces the wasteful cycle of repair and replacement and eliminates the frequent application of environmentally harmful paint, sealers and stains.</div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Faq;
