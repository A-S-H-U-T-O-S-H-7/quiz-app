"use client";
import React, { useState, useEffect } from "react";

const Timer = ({ time }) => {
  if (time <= 0) {
    return (
      <div className="text-5xl font-black text-red-500 animate-[shake_0.5s_ease-in-out_infinite] tracking-wider">
        Times Up!!
      </div>
    );
  }
  return (
    <div
      className={`w-28 h-28 rounded-full border-8 flex items-center justify-center text-4xl font-bold 
      ${time <= 10 ? "border-red-500 animate-[pulse_1s_ease-in-out_infinite] text-red-500" : "border-gray-200 text-orange-500"}`}
    >
      {time}
    </div>
  );
};

const questions = [
  { question: "Which country won the FIFA World Cup in 2018?", answer: "France", image: null },
  { question: "Who holds the record for the most goals in a single World Cup tournament?", answer: "Just Fontaine", image: null },
  { question: "Who won the first ever Rugby World Cup in 1987?", answer: "New Zealand", image: null },
  { question: "Who won the Women's Football World Cup in 2019?", answer: "USA", image: null },
  { question: "Which country has won the most Olympic gold medals in history?", answer: "USA", image: null },
  
  { question: "Which of the following is a programming language developed by Sun Microsystems?", answer: "Java", image: null },
  { question: "What does the acronym 'RAM' stand for?", answer: "Random Access Memory", image: null },
  { question: "Who is the founder of Android Inc.?", answer: "Andy Rubin", image: null },
  { question: "Which app is the default for web browsing on a Mac?", answer: "Safari", image: null },
  { question: "Who is known as the co-founder of Apple and one of the creators of the Macintosh?", answer: "Steve Jobs", image: null },
  
  { question: "What is the primary greenhouse gas responsible for global warming?", answer: "Carbon Dioxide", image: null },
  { question: "Which gas is primarily responsible for the depletion of the ozone layer?", answer: "Chlorofluorocarbons (CFCs)", image: null },
  { question: "Which of the following is NOT an effect of climate change?", answer: "Global cooling", image: null },
  { question: "Which of the following is a non-renewable resource?", answer: "Oil", image: null },
  { question: "Which organization monitors the health of the planet and climate change at a global level?", answer: "Intergovernmental Panel on Climate Change (IPCC)", image: null },

  { question: "Guess the person name?", answer: "Albert Einstein", image: "/Einstain.png" },
  { question: "Guess the person name?", answer: "Kalpana Chawla", image: "/qus17.jpg" },
  { question: "Guess the person name?", answer: "Aryabhatta", image: "/qus18.jpg"  },
  { question: "Guess the person name?", answer: "Isaac Newton", image: "/qus19.jpg"  },
  { question: "Guess the person name?", answer: "Galileo", image: "/qus20.jpg"  },

  { question: "Identify this logo?", answer: "BP P.I.C (British Petroleum)", image: "/qus21.jpg"  },
  { question: "Identify this logo?", answer: "VideoCon", image: "/qus22.jpg"  },
  { question: "Identify this logo?", answer: "Reebok", image: "/qus23.jpg"  },
  { question: "Identify this logo?", answer: "Volkswagen", image: "/qus24.jpg"  },
  { question: "Identify this logo?", answer: "Shell", image: "/qus25.jpg"  },



];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (!quizStarted || quizFinished) return;

    setTimer(30);

    let interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [quizStarted, currentQuestion]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 text-white text-center space-y-4">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500 animate-pulse">
          Gandhi Institute For Education And Technology
        </h1>
        <h2 className="text-4xl font-bold text-blue-200">Annual Techno-Cultural Fest</h2>
        <h2 className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300 animate-bounce">
          Garimaa 2025
        </h2>
        <h3 className="text-3xl font-semibold text-green-300 animate-pulse">Tech Mind (Technical Quiz)</h3>
        <button
          onClick={() => setQuizStarted(true)}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-all shadow-lg"
        >
          Let's Start
        </button>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 text-white text-center space-y-6">
        <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
          Thank You for Participation!
        </h1>
        <h2 className="text-4xl font-bold text-green-300 animate-bounce">We Appreciate Your Effort!</h2>
        <button
          onClick={() => {
            setQuizStarted(false);
            setQuizFinished(false);
            setCurrentQuestion(0);
            setTimer(30);
          }}
          className="bg-gradient-to-r from-red-400 to-red-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:from-red-500 hover:to-red-700 transform hover:scale-105 transition-all shadow-lg"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col max-w-full items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 text-white text-center space-y-4">
      <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
        Gandhi Institute For Education And Technology
      </h1>
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
        Garimaa 2025
      </h2>
      <Timer time={timer} />
      <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 mt-4">
        {/* Question Section */}
        <div className="space-y-8">
          {/* Question on first line */}
          <h2 className="text-4xl font-bold text-left">
            {questions[currentQuestion].question}
          </h2>
          
          {/* Image if exists */}
          {questions[currentQuestion].image && (
            <div className="flex justify-center">
              <img
                src={questions[currentQuestion].image}
                alt="Question"
                className="w-50 h-[180px] object-contain border-2 border-dashed border-gray-300 rounded-lg"
              />
            </div>
          )}
          
          {/* Answer button and answer on the same line */}
          <div className="flex justify-end mt-[10px] items-center space-x-10">
            {showAnswer && (
              <h3 className="text-3xl font-bold text-green-300">
                {questions[currentQuestion].answer}
              </h3>
            )}
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-xl text-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all shadow-lg"
            >
              {showAnswer ? "Hide Answer" : "See Answer"}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        {currentQuestion > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-8 py-3 rounded-xl text-lg font-bold hover:from-gray-600 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg"
          >
            Previous
          </button>
        )}
        <button
          onClick={handleNext}
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-bold hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg"
        >
          {currentQuestion < questions.length - 1 ? "Next" : "Finish Quiz"}
        </button>
      </div>
    </div>
  );
}