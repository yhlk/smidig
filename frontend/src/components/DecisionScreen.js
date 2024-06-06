import React, { useEffect, useState } from 'react';
import './css/DecisionScreen.css';

const DecisionScreen = ({ onDecisionComplete, session_id }) => {
const [question, setQuestion] = useState('');
const [choices, setChoices] = useState([]);
const [selectedChoice, setSelectedChoice] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/questions');
            const questions = await response.json();
            setQuestion(questions[0].question);

            const choicesResponse = await fetch('http://localhost:5000/api/choices');
            const choicesData = await choicesResponse.json();
            setChoices(choicesData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

    const handleOptionClick = async (choice) => {
        setSelectedChoice(choice);
        try {
        const body = JSON.stringify([
            {
            answers: choice,
            question_id: question.id,
            },
        ]);
        await fetch('http://localhost:5000/api/choices', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: body,
        });
        onDecisionComplete();
        } catch (error) {
        console.error("Error posting choice:", error);
        }
    };

    return (
        <div className="decision-screen">
        <div className="header">
            <span className="user-icon">'ikon'</span>
            <span className="user-label">Player</span>
        </div>
        <h1>{question}</h1>
        <div className="options-container">
            {choices.map((choice) => (
            <button
                key={choice.id}
                className="option-button"
                onClick={() => handleOptionClick(choice)}
            >
                {choice.text}
            </button>
            ))}
        </div>
        </div>
    );
};

export default DecisionScreen;