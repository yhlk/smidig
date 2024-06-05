import React from 'react';

export const getQuestions = () => { // henter questions
  return fetch('http://localhost:5000/api/questions')
    .then((response) => response.json())
    .then((data) => data);
};

export const postQuestions = (question, choiceList, session_id) => { // sender question til backend
    const body = [
    {
      question: question,
      choiceList: choiceList,
      session_id: session_id,
    },
    ]
  return fetch('http://localhost:5000/api/questions', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const getChoices = () => { // henter choices
  return fetch('http://localhost:5000/api/choices')
    .then((response) => response.json())
    .then((data) => data);
};

export const postChoices = (answers, question_id) => { // sender choices til backend
    const body = [
        {
        answers: answers,
        question_id: question_id,
        },
    ];
    return fetch('http://localhost:5000/api/choices', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: body,
    })
        .then((response) => response.json())
        .then((data) => data);
};

export const postRating = (question, user_id, score, feedback) => { // sender rating til backend
    const body = [
        {
        question: question,
        user_id: user_id,
        score: score,
        feedback: feedback,
        },
    ];
    return fetch('http://localhost:5000/api/rating', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: body,
    })
        .then((response) => response.json())
        .then((data) => data);
};

export const postResults = (question_id, choice_id, user_id) => {
    const body = [
        {
        question_id: question_id,
        choice_id: choice_id,
        user_id: user_id,
        },
    ];
    return fetch('http://localhost:5000/api/results', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: body,
    })
        .then((response) => response.json())
        .then((data) => data);
};

export const getSessionCode = () => {
    return fetch('http://localhost:5000/api/sessions/generate') 
        .then((response) => response.json())
        .then((data) => data);
};

export const postLogin = (user_name, session_code) => {
    const body = [
        {
        user_name: user_name,
        session_code: session_code,
        },
    ];
    return fetch('http://localhost:5000/api/sessions/login', { 
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: body,
    })
        .then((response) => response.json())
        .then((data) => data);
}

// skulle vi ha post til users.js? tenkte siden postLogin sjekker om en student eksisterer, hvis ikke så blir det laget en ny bruker?

// har laget en fil som fetcher api data fra backend. 