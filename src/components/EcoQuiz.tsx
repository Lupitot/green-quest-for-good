
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { quizQuestions, resultMessages, Question } from '@/data/quizQuestions';
import QuizOption from './QuizOption';
import BackgroundLeaf from './BackgroundLeaf';
import ConfettiEffect from './ConfettiEffect';
import { ArrowRight, RefreshCw, Share2, Lightbulb, Trophy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

enum GameState {
  START = 'start',
  PLAYING = 'playing',
  FEEDBACK = 'feedback',
  FINISHED = 'finished'
}

const EcoQuiz = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const currentQuestion: Question = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const startQuiz = () => {
    setGameState(GameState.PLAYING);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOptionIndex(null);
    setShowCorrectAnswer(false);
  };

  const handleOptionSelect = (index: number) => {
    if (selectedOptionIndex !== null || gameState !== GameState.PLAYING) return;
    setSelectedOptionIndex(index);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    setShowCorrectAnswer(true);
    setGameState(GameState.FEEDBACK);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
      setShowCorrectAnswer(false);
      setGameState(GameState.PLAYING);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setGameState(GameState.FINISHED);
    if (score >= 6) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
    setShowCorrectAnswer(false);
    setGameState(GameState.START);
  };

  const getResultMessage = () => {
    for (const message of resultMessages) {
      if (score >= message.minScore && score <= message.maxScore) {
        return message;
      }
    }
    return resultMessages[0];
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorations */}
      <BackgroundLeaf size={40} top="10%" left="5%" />
      <BackgroundLeaf size={28} top="15%" right="10%" delay="0.5s" />
      <BackgroundLeaf size={36} bottom="20%" left="8%" delay="1s" />
      <BackgroundLeaf size={32} bottom="15%" right="5%" delay="1.5s" />
      <BackgroundLeaf size={24} top="40%" left="15%" delay="2s" />
      <BackgroundLeaf size={45} bottom="30%" right="12%" delay="2.5s" />
      
      <ConfettiEffect active={showConfetti} />

      <div className="w-full max-w-3xl">
        {gameState === GameState.START && (
          <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm border-eco-green-light shadow-lg">
            <div className="text-center space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">IA for Good</h1>
              <p className="text-xl md:text-2xl font-medium text-eco-green-dark">Quiz Écologique</p>
              
              <div className="py-6">
                <p className="text-gray-700 mb-6">
                  Teste tes connaissances en écologie et découvre comment contribuer à un avenir plus durable !
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  20 questions pour mesurer ton impact et apprendre des gestes concrets.
                </p>
              </div>
              
              <Button 
                className="text-lg bg-eco-green hover:bg-eco-green-dark transition-all px-8 py-6"
                onClick={startQuiz}
              >
                Commencer le quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        )}

        {(gameState === GameState.PLAYING || gameState === GameState.FEEDBACK) && (
          <Card className="p-6 md:p-8 bg-white/90 backdrop-blur-sm border-eco-green-light shadow-lg">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Question {currentQuestionIndex + 1}/{quizQuestions.length}</span>
                <span className="text-sm font-medium">Score: {score}</span>
              </div>
              <Progress value={progress} className="h-2 bg-eco-blue-light" />
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-6">{currentQuestion.question}</h2>

            <div className="space-y-2 mb-6">
              {currentQuestion.options.map((option, index) => (
                <QuizOption
                  key={index}
                  label={option}
                  selected={selectedOptionIndex === index}
                  correct={
                    showCorrectAnswer
                      ? index === currentQuestion.correctAnswer
                      : null
                  }
                  onClick={() => handleOptionSelect(index)}
                  disabled={showCorrectAnswer}
                />
              ))}
            </div>

            {gameState === GameState.FEEDBACK && (
              <div className="mt-6 mb-6 p-4 bg-eco-green-light/50 rounded-lg flex gap-3">
                <Lightbulb className="h-5 w-5 text-eco-green-dark flex-shrink-0 mt-1" />
                <p className="text-sm text-eco-green-dark">{currentQuestion.explanation}</p>
              </div>
            )}

            {gameState === GameState.FEEDBACK && (
              <Button
                className="w-full mt-4 bg-eco-green hover:bg-eco-green-dark transition-all"
                onClick={nextQuestion}
              >
                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <>
                    Question suivante
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Voir mon résultat
                    <Trophy className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </Card>
        )}

        {gameState === GameState.FINISHED && (
          <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm border-eco-green-light shadow-lg text-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">{getResultMessage().title}</h2>
              
              <div className="flex items-center justify-center py-6">
                <div className="w-48 h-48 rounded-full bg-eco-green-light/30 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-eco-green-light/50 flex items-center justify-center">
                    <div className="text-3xl md:text-4xl font-bold text-eco-green-dark">
                      {score}/{quizQuestions.length}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">{getResultMessage().message}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  variant="outline" 
                  className="flex-1 gap-2 border-eco-green text-eco-green-dark hover:bg-eco-green-light/20"
                  onClick={resetQuiz}
                >
                  <RefreshCw className="h-4 w-4" />
                  Rejouer
                </Button>
                
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EcoQuiz;
