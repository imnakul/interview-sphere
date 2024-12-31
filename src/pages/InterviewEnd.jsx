import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function InterviewEnd({ isAdmin }) {
   const navigate = useNavigate()
   const [rating, setRating] = useState(null)
   const [feedback, setFeedback] = useState('')

   const handleRatingClick = (value) => {
      setRating(value)
   }

   const handleSubmit = () => {
      console.log('Feedback Submitted:', { rating, feedback })
      navigate(isAdmin ? '/admin-dashboard' : '/user-dashboard') // Redirect based on role
   }

   const handleConfetti = () => {
      confetti({
         particleCount: 100,
         spread: 70,
         origin: { x: 0.5, y: 0.5 }, // Center of the canvas
      })
   }

   useEffect(() => {
      handleConfetti()
   }, [])

   return (
      <>
         <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/fallback.png')] bg-cover bg-center bg-gray-100 p-4">
            {/* Image and Role-Specific Message */}
            <div className='flex flex-col items-center mb-8'>
               {isAdmin ? (
                  <>
                     <img
                        src='/thankyou.png'
                        alt='Thank You'
                        className='h-36 w-48 mb-4'
                     />
                     <h1 className='text-2xl font-bold text-gray-800 text-center'>
                        For using this platform to conduct your interview.
                     </h1>
                  </>
               ) : (
                  <>
                     <img
                        src='/interviewend1.jpg'
                        alt='Congrats'
                        className='h-48 w-40 mb-4 rounded-full'
                     />
                     <h1 className='text-2xl font-bold text-gray-800 text-center'>
                        Congrats on completing the interview! Admin will soon
                        let you know about the result.
                     </h1>
                  </>
               )}
            </div>

            {/* Feedback Section */}
            <div className='w-full max-w-lg bg-white/30 p-4 rounded-lg shadow-lg'>
               <h2 className='text-xl font-semibold text-center text-gray-700 mb-4'>
                  Feedback Please!
               </h2>

               {/* Rating Section */}
               <div className='flex justify-center mb-6'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                     <button
                        key={num}
                        onClick={() => handleRatingClick(num)}
                        className={`h-10 w-10 rounded-full flex items-center justify-center mx-1 
                        ${
                           rating === num
                              ? 'bg-purple-500 text-white'
                              : 'bg-gray-200 text-gray-800'
                        } hover:bg-purple-500 ring-purple-200 hover:ring-2 focus:ring-2 focus:ring-purple-300 `}
                     >
                        {num}
                     </button>
                  ))}
               </div>

               {/* Feedback Textbox */}
               <textarea
                  className='w-full h-48 bg-white/40 text-black placeholder-gray-600 border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  placeholder='Write your feedback here...'
                  value={feedback}
                  rows={5}
                  onChange={(e) => setFeedback(e.target.value)}
               />

               {/* Submit Button */}
               <button
                  onClick={handleSubmit}
                  className='w-full mt-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 focus:ring-2 focus:ring-purple-400 '
               >
                  Submit
               </button>
            </div>
         </div>
      </>
   )
}
export default InterviewEnd
