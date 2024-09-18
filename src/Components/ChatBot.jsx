import React, { useState, useEffect, useRef } from 'react';
import '../Styles/global.css';
import { IoCloseCircle } from 'react-icons/io5';

const ChatBot = ({ onClose }) => {
    const [chatHistory, setChatHistory] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const maxQuestions = 10;
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (chatHistory.length === 0) {
            // Greet the user when the chatbot is opened
            setChatHistory([{ sender: 'bot', message: "Welcome! How can I assist you today?" }]);
        }
    }, [chatHistory]);


    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    const scrollToBottom = () => {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    const handleSendMessage = () => {
        if (questionCount < maxQuestions) {
            const userMessage = { sender: 'user', message: inputMessage };
            setChatHistory(prevHistory => [...prevHistory, userMessage]);
            // Answer the user's question based on the product
            const answer = answerQuestion(inputMessage);
            const botMessage = { sender: 'bot', message: answer };
            setChatHistory(prevHistory => [...prevHistory, botMessage]);
            setQuestionCount(prevCount => prevCount + 1);
        } else if (!email) {
            if (!inputMessage.includes('@')) {
                const errorMessage = "Please enter a valid email address.";
                setChatHistory(prevHistory => [...prevHistory, { sender: 'user', message: inputMessage }]);
                setChatHistory(prevHistory => [...prevHistory, { sender: 'bot', message: errorMessage }]);
            } else {
                setEmail(inputMessage);
                setInputMessage('');
                setChatHistory(prevHistory => [...prevHistory, { sender: 'user', message: inputMessage }]);
                const replyMessage = `Thanks for contacting us! We will email you at ${inputMessage} shortly.`;
                setChatHistory(prevHistory => [...prevHistory, { sender: 'bot', message: replyMessage }]);
                setTimeout(() => handleCloseChat(), 5000);
            }
        }
        setInputMessage('');
    };





    const answerQuestion = (question) => {
        // Sample questions and their answers related to the products
        switch (question.toLowerCase()) {
            case 'moisture resistance':
                return "The moisture resistance of wood composite ceiling is waterproof.";
            case 'durability':
                return "The wood composite ceiling has a durable lifetime of over 15 years.";
            case 'uv resistance':
                return "The wood composite ceiling has high-grade UV resistance.";
            case 'painting':
                return "No, wood composite ceiling does not need painting.";
            case 'structure':
                return "The wood composite ceiling is extruded by various molds.";
            case 'moisture':
                return "Wood has water absorptive moisture resistance.";
            case 'outdoors':
                return "Wood typically lasts less than 3 years outdoors.";
            case 'wood uv':
                return "Wood is easily affected by UV radiation.";
            case 'wood painting':
                return "Yes, wood needs to be painted periodically.";
            case 'wood structure':
                return "The structure of wood is simplex.";
            case 'rot resistance':
                return "Wood composite ceiling is antiseptic and does not rot easily.";
            case 'split resistance':
                return "Wood composite ceiling does not crack easily under weather effects.";
            case 'distortion resistance':
                return "Wood composite ceiling has minimal contraction or expansion due to moisture and temperature changes.";
            case 'fading resistance':
                return "Wood composite ceiling has high resistance to fading.";
            case 'outdoor resistance':
                return "Wood composite ceiling performs well outdoors, unlike untreated wood.";
            case 'need painting':
                return "No, wood composite ceiling does not require painting.";
            case 'durable/life time':
                return "Wood composite ceiling has a lifespan of over 15 years.";
            case 'environment effect':
                return "Wood composite ceiling is recyclable, contributing to a sustainable environment.";
            case 'material':
                return "The primary material used in wood composite ceiling is a blend of wood fibers and plastic.";
            case 'installation':
                return "Wood composite ceiling can be easily installed using standard carpentry tools.";
            case 'price':
                return "The price of wood composite ceiling varies based on the quality, dimensions, and supplier. It's generally competitive compared to traditional wood products.";
            case 'general':
                return "Wood composite ceiling is a versatile and stylish option for interior and exterior decoration, offering the natural look of wood with enhanced durability and weather resistance.";
            case 'time':
                return "Delivery time for wood composite ceiling depends on factors such as order quantity, customization requirements, and supplier availability. It's advisable to inquire directly with the supplier for specific timelines.";
            case 'quality':
                return "Wood composite ceiling is known for its high quality, offering superior durability, resistance to moisture, UV rays, and environmental sustainability.";
            case 'availability':
                return "Wood composite ceiling is widely available through various suppliers and retailers. It's recommended to check with local stores or online platforms for availability.";
            case 'maintenance':
                return "Wood composite ceiling requires minimal maintenance, typically limited to regular cleaning with mild soap and water to preserve its appearance and performance.";
            default:
                return "Sorry, I don't have an answer to that question right now.";
        }
    };

    const handleCloseChat = () => {
        onClose(); // Close the chat window
        setChatHistory([]);
        setQuestionCount(0);
        setName('');
        setEmail('');
        setInputMessage('');
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <div className="heading">
                <h1 className='head'>Saepes</h1>
                <div className="close-icon" onClick={handleCloseChat}><IoCloseCircle /></div>
            </div>
            <div className="chat-history">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.sender === 'user' ? <span className="user-message">{message.message}</span> : <span className="bot-message">{message.message}</span>}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            {(questionCount < maxQuestions || !email) && (
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            )}
        </div>
    );

};

export default ChatBot;