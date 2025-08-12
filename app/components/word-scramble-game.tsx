'use client';

import { useState, useEffect } from 'react';
import { FaRedo, FaTrophy, FaLightbulb } from 'react-icons/fa';

interface WordData {
  word: string;
  hint: string;
  category: string;
}

// EDIT THIS ARRAY TO ADD YOUR WORDS!
// Add new objects with word, hint, and category properties
const techWords: WordData[] = [
  { word: 'JAVASCRIPT', hint: 'Popular web programming language', category: 'Languages' },
  { word: 'TYPESCRIPT', hint: 'JavaScript with type safety', category: 'Languages' },
  { word: 'PYTHON', hint: 'Snake-named programming language', category: 'Languages' },
  { word: 'REACT', hint: 'Facebook\'s UI library', category: 'Frameworks' },
  { word: 'NEXTJS', hint: 'React framework for production', category: 'Frameworks' },
  { word: 'ALGORITHM', hint: 'Step-by-step problem solving method', category: 'Concepts' },
  { word: 'DATABASE', hint: 'Organized collection of data', category: 'Concepts' },
  { word: 'API', hint: 'Application Programming Interface', category: 'Concepts' },
  { word: 'FRONTEND', hint: 'User-facing part of applications', category: 'Development' },
  { word: 'BACKEND', hint: 'Server-side of applications', category: 'Development' },
  { word: 'DEBUGGING', hint: 'Finding and fixing code errors', category: 'Development' },
  { word: 'GITHUB', hint: 'Popular code hosting platform', category: 'Tools' },
  { word: 'TAILWIND', hint: 'Utility-first CSS framework', category: 'Tools' },
  { word: 'DOCKER', hint: 'Containerization platform', category: 'Tools' },
  { word: 'KUBERNETES', hint: 'Container orchestration system', category: 'Tools' }
];

export default function WordScrambleGame() {
  const [currentWord, setCurrentWord] = useState<WordData | null>(null);
  const [scrambledWord, setScrambledWord] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [usedWords, setUsedWords] = useState<string[]>([]);

  // Scramble a word
  const scrambleWord = (word: string): string => {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
  };

  // Get a random word that hasn't been used
  const getRandomWord = (): WordData => {
    const availableWords = techWords.filter(word => !usedWords.includes(word.word));
    return availableWords[Math.floor(Math.random() * availableWords.length)];
  };

  // Start new round
  const startNewRound = () => {
    const word = getRandomWord();
    setCurrentWord(word);
    setUsedWords(prev => [...prev, word.word]);
    setScrambledWord(scrambleWord(word.word));
    setUserGuess('');
    setShowHint(false);
    setIsCorrect(false);
  };

  // Initialize game
  const initializeGame = () => {
    setScore(0);
    setAttempts(0);
    setGameStarted(true);
    setGameComplete(false);
    setUsedWords([]);
    startNewRound();
  };

  // Check answer
  const checkAnswer = () => {
    if (!currentWord) return;
    
    setAttempts(prev => prev + 1);
    
    if (userGuess.toUpperCase() === currentWord.word) {
      setIsCorrect(true);
      setScore(prev => prev + 1);
      
      setTimeout(() => {
        if (attempts + 1 >= 5) {
          setGameComplete(true);
        } else {
          startNewRound();
        }
      }, 1500);
    } else {
      // Wrong answer - show hint and allow retry
      setShowHint(true);
    }
  };

  // Skip word
  const skipWord = () => {
    setAttempts(prev => prev + 1);
    if (attempts + 1 >= 5) {
      setGameComplete(true);
    } else {
      startNewRound();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userGuess.trim()) {
      checkAnswer();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-accent-emerald to-accent-blue bg-clip-text text-transparent">
          Tech Word Scramble
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Test your tech knowledge by unscrambling these words!
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Challenge: Get at least 4 out of 5 correct!
        </p>
        
        {!gameStarted ? (
          <button
            onClick={initializeGame}
            className="px-6 py-3 bg-accent-emerald text-white rounded-lg hover:bg-accent-emerald/90 transition-colors duration-300 font-semibold"
          >
            Start Game
          </button>
        ) : (
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Score: <span className="text-accent-blue font-bold">{score}</span>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Round: <span className="text-accent-purple font-bold">{Math.min(attempts + 1, 5)}/5</span>
            </div>
            <button
              onClick={initializeGame}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <FaRedo className="w-4 h-4" />
              Reset
            </button>
          </div>
        )}
      </div>

      {gameComplete && (
        <div className="text-center mb-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg border border-green-200 dark:border-green-700">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaTrophy className="w-6 h-6 text-yellow-500" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              Game Complete!
            </span>
          </div>
          <p className="text-green-700 dark:text-green-300">
            Final Score: {score}/5
          </p>
          <p className="text-green-700 dark:text-green-300">
            {score >= 4 ? 'Excellent tech knowledge!' : 'Keep learning those tech terms!'}
          </p>
        </div>
      )}

      {gameStarted && !gameComplete && currentWord && (
        <div className="max-w-md mx-auto">
          {isCorrect ? (
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
              <div className="text-3xl mb-2">🎉</div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400 mb-1">
                Correct!
              </div>
              <div className="text-green-700 dark:text-green-300">
                {currentWord.word}
              </div>
            </div>
          ) : (
            <>
              {/* Category and scrambled word */}
              <div className="text-center mb-6">
                <div className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-medium mb-4">
                  {currentWord.category}
                </div>
                <div className="text-3xl font-bold tracking-wider mb-4 font-mono bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  {scrambledWord}
                </div>
              </div>

              {/* Hint */}
              {showHint && (
                <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                    <FaLightbulb className="w-4 h-4" />
                    <span className="font-medium">Hint:</span>
                    <span>{currentWord.hint}</span>
                  </div>
                </div>
              )}

              {/* Input and buttons */}
              <div className="space-y-4">
                <input
                  type="text"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your answer..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-gray-700 dark:text-white"
                  autoFocus
                />
                
                <div className="flex gap-3">
                  <button
                    onClick={checkAnswer}
                    disabled={!userGuess.trim()}
                    className="flex-1 px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    Submit
                  </button>
                  
                  {!showHint && (
                    <button
                      onClick={() => setShowHint(true)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                    >
                      Hint
                    </button>
                  )}
                  
                  <button
                    onClick={skipWord}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {!gameComplete && (
        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>Do you know this word?</p>
        </div>
      )}
    </div>
  );
}
