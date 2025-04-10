"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Heart,
  Star,
  Cake,
  Gift,
  PartyPopper,
} from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

interface BirthdayMessagesProps {
  onComplete: () => void;
}

export default function BirthdayMessages({
  onComplete,
}: BirthdayMessagesProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const [direction, setDirection] = useState(0); // -1 for backward, 1 for forward
  const [transitionType, setTransitionType] = useState("fade");

  const messages = [
    {
      title: "Sanu!",
      message:
        "Today is your special day, and I wanted to make it unforgettable for you! 🎂",
      emoji: "🎉",
      animation: "fadeUp",
      bgColor: "from-rose-400 to-pink-500",
      theme: "celebration",
      transition: "fade",
    },
    {
      title: "You're My Everything",
      message:
        "Your smile, your laugh, your presence in my life makes everything better. You deserve the world and more.",
      emoji: "✨",
      animation: "slideIn",
      bgColor: "from-purple-400 to-indigo-500",
      theme: "cosmic",
      transition: "slide",
    },
    {
      title: "Our Journey Together",
      message:
        "Every moment with you is precious - from our first meeting to today. Each memory we've created together is a treasure I hold close.",
      emoji: "💫",
      animation: "scale",
      bgColor: "from-blue-400 to-cyan-500",
      theme: "nature",
      transition: "flip",
    },
    {
      title: "You Light Up My World",
      message:
        "Your kindness, your strength, and your beautiful soul inspire me every day. You make me want to be a better person.",
      emoji: "🌟",
      animation: "rotate",
      bgColor: "from-amber-400 to-yellow-500",
      theme: "golden",
      transition: "zoom",
    },
    {
      title: "Forever & Always",
      message:
        "Some things are meant to last forever - like my feelings for you. Today, tomorrow, and for all the days to come.",
      emoji: "∞",
      animation: "bounce",
      bgColor: "from-red-400 to-rose-500",
      theme: "eternal",
      transition: "rotate",
    },
    {
      title: "Happy Birthday Aakrity!",
      message:
        "May this year bring you endless joy, success, and all the love your heart can hold. I'm so blessed to be part of your journey.",
      emoji: "🎁",
      animation: "pulse",
      bgColor: "from-fuchsia-400 to-pink-500",
      theme: "grand",
      transition: "morph",
      final: true,
    },
  ];

  const handleNext = () => {
    if (currentStep < messages.length - 1) {
      // Set direction for animation
      setDirection(1);

      // Set transition type based on the next message
      setTransitionType(messages[currentStep + 1].transition || "fade");

      setCurrentStep(currentStep + 1);

      // Show confetti on the final message
      if (currentStep === messages.length - 2) {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      }
    } else {
      onComplete();
    }
  };

  // Get current theme based on message
  const currentTheme = messages[currentStep].theme;

  // Define theme-specific background styles
  const getThemeBackground = () => {
    switch (currentTheme) {
      case "celebration":
        return "bg-gradient-to-b from-rose-100 to-purple-200";
      case "cosmic":
        return "bg-gradient-to-b from-indigo-900 to-purple-700";
      case "nature":
        return "bg-gradient-to-b from-emerald-100 to-teal-200";
      case "golden":
        return "bg-gradient-to-b from-amber-100 to-yellow-200";
      case "eternal":
        return "bg-gradient-to-b from-pink-100 to-red-200";
      case "grand":
        return "bg-gradient-to-b from-fuchsia-100 to-pink-200";
      default:
        return "bg-gradient-to-b from-rose-100 to-purple-200";
    }
  };

  // Get button style based on current theme
  const getButtonStyle = () => {
    switch (currentTheme) {
      case "cosmic":
        return {
          bg: "bg-indigo-600 hover:bg-indigo-700",
          text: "text-white",
        };
      case "nature":
        return {
          bg: "bg-emerald-600 hover:bg-emerald-700",
          text: "text-white",
        };
      case "golden":
        return {
          bg: "bg-amber-600 hover:bg-amber-700",
          text: "text-white",
        };
      case "eternal":
        return {
          bg: "bg-rose-600 hover:bg-rose-700",
          text: "text-white",
        };
      case "grand":
        return {
          bg: "bg-fuchsia-600 hover:bg-fuchsia-700",
          text: "text-white",
        };
      default:
        return {
          bg: "bg-purple-600 hover:bg-purple-700",
          text: "text-white",
        };
    }
  };

  const buttonStyle = getButtonStyle();

  return (
    <div
      className={`min-h-screen w-full ${getThemeBackground()} transition-colors duration-1000 flex flex-col items-center justify-center`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-4 sm:p-6 md:p-12 relative overflow-hidden w-full">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-r from-pink-400 to-purple-500 opacity-80" />
            <div className="absolute -top-6 -right-6 w-20 sm:w-32 h-20 sm:h-32 bg-yellow-300 rounded-full opacity-30" />
            <div className="absolute -bottom-6 -left-6 w-20 sm:w-32 h-20 sm:h-32 bg-pink-300 rounded-full opacity-30" />

            <div className="relative pt-16 sm:pt-20 text-center">
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
                className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                {currentStep === 0 && (
                  <Cake className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                )}
                {currentStep === 1 && (
                  <Star className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                )}
                {currentStep === 2 && (
                  <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                )}
                {currentStep === 3 && (
                  <Gift className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                )}
                {currentStep === 4 && (
                  <PartyPopper className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                )}
                {currentStep === 5 && (
                  <Cake className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg" />
                )}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-handwriting font-bold text-purple-800 mb-4 sm:mb-6"
              >
                {messages[currentStep].title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-8"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      delay: i * 0.2,
                    }}
                  >
                    <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-purple-700 font-handwriting font-medium mb-6 sm:mb-10 px-2 sm:px-4"
              >
                {messages[currentStep].message}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 sm:mt-8"
              >
                <button
                  onClick={handleNext}
                  className={`px-4 sm:px-6 py-2 sm:py-3 font-handwriting font-medium rounded-full ${buttonStyle.bg} ${buttonStyle.text} font-medium text-base sm:text-lg flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {currentStep < messages.length - 1 ? (
                    <>
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </>
                  ) : (
                    <>
                      See Your Surprise
                      <Heart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </>
                  )}
                </button>
              </motion.div>

              {/* Progress indicator */}
              <div className="flex justify-center mt-6 sm:mt-8">
                {messages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 ${
                      index === currentStep ? "bg-purple-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
        />
      )}
    </div>
  );
}
