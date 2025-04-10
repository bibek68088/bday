import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "./components/loader"
import BirthdayMessages from "./components/birthday-messages"
import FinalCelebration from "./components/final-celebration"
import "./App.css"

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [step, setStep] = useState<"messages" | "celebration">("messages")

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleMessagesComplete = () => {
    setStep("celebration")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-200">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            <Loader name="Aakrity" from="Bibek" />
          </motion.div>
        ) : (
          <>
            {step === "messages" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <BirthdayMessages onComplete={handleMessagesComplete} />
              </motion.div>
            )}

            {step === "celebration" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <FinalCelebration name="Aakrity" from="Bibek" />
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
