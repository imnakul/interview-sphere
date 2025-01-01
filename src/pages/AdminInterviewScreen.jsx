import { Card } from '@material-tailwind/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminScreen() {
   const [isFullscreen, setIsFullscreen] = useState(false)
   const [both, setBoth] = useState(false)
   const [canvas, setCanvas] = useState(true)
   const [code, setCode] = useState(false)

   const navigate = useNavigate()

   return (
      <>
         <div className="min-h-screen p-3 bg-[url('/fallback.png')] bg-cover bg-center">
            <div className='flex max-w-9xl min-h-full bg-white/40 p-3.5 gap-4 rounded-2xl'>
               {/* left container  */}
               <div className=' w-1/3 p-1 '>
                  <h1 className='text-center text-2xl font-bold font-serif'>
                     Admin
                  </h1>
                  <div className='flex flex-wrap gap-4 justify-evenly p-5'>
                     <Card className='size-auto bg-white/70 border-2 border-t-gray-700 rounded-t-lg rounded-b-none'>
                        <h1 className='text-center mt-20'>
                           Admin Video Placeholder
                        </h1>
                     </Card>
                     <Card className='size-auto bg-white/70 border-2 border-t-gray-700 rounded-t-lg rounded-b-none'>
                        <h1 className='text-center mt-20'>
                           User Video Placeholder
                        </h1>
                     </Card>
                  </div>
                  <div className='flex flex-col justify-evenly items-center gap-4 rounded-t-md p-1 m-2'>
                     <button className='px-4 py-2 bg-purple-600 text-white border-2 border-purple-800 rounded-md shadow-xl hover:bg-purple-800 focus:ring-2  hover:ring-2 ring-purple-300 '>
                        Import Notes
                     </button>
                     <button className='px-4 py-2 bg-purple-600 text-white border-2 border-purple-800 rounded-md shadow-xl hover:bg-purple-800 focus:ring-2  hover:ring-2 ring-purple-300'>
                        Mark Interviewee
                     </button>
                  </div>

                  <div className='flex flex-col gap-4 rounded-t-md p-2 my-5 bg-white/30 active:ring-2 ring-purple-200 h-2/5 mx-auto text-center'>
                     Live Chat
                  </div>

                  <div className='flex flex-col justify-evenly gap-4 rounded-t-md p-1 m-2'>
                     <button
                        className='px-4 py-2 bg-red-600 text-white border-2 border-red-800 rounded-md shadow-xl hover:bg-red-800 focus:ring-2  hover:ring-2 ring-red-300'
                        onClick={() => {
                           const reply = confirm(
                              'Are you sure you want to end the interview ?'
                           )
                           if (reply) {
                              navigate('/admininterviewend')
                           } else {
                              return
                           }
                        }}
                     >
                        End Interview
                     </button>
                  </div>
               </div>

               {/* right container  */}
               <div className='flex flex-col gap-4 border-2 border-black w-2/3 p-2'>
                  <div
                     className='inline-flex rounded-md justify-center items-center mt-2'
                     role='group'
                  >
                     <button
                        type='button'
                        className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white'
                        onClick={() => {
                           setCanvas(true)
                           setCode(false)
                           setBoth(false)
                        }}
                     >
                        Canvas
                     </button>
                     <button
                        type='button'
                        className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white'
                        onClick={() => {
                           setCode(true)
                           setCanvas(false)
                           setBoth(false)
                        }}
                     >
                        CodeArea
                     </button>
                     <button
                        type='button'
                        className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white'
                        onClick={() => {
                           setBoth(true)
                           setCanvas(false)
                           setCode(false)
                        }}
                     >
                        Both
                     </button>
                  </div>
                  <div className='flex gap-1'>
                     {(canvas || both) && (
                        <div
                           className={` p-1 h-[575px] ${
                              canvas ? 'w-full' : both ? 'w-1/2' : 'w-hidden'
                           } transition-all duration-500 ease-in-out}`}
                        >
                           <div className='w-full h-full border-2 border-black rounded-t-lg bg-white/30 p-1'>
                              Draw Board
                           </div>
                        </div>
                     )}
                     {(code || both) && (
                        <div
                           className={`p-1 gap-3 h-[575px] ${
                              code ? 'flex' : 'flex flex-col'
                           } 
                           
                           ${
                              code ? 'w-full' : both ? 'w-1/2' : 'w-hidden'
                           } transition-all duration-500 ease-in-out}`}
                        >
                           <div
                              className={` bg-white/30 p-1 border-2 border-black rounded-t-lg ${
                                 code ? 'h-[565px] w-2/3' : 'h-3/4 w-full'
                              } transition-all duration-500 ease-in-out`}
                           >
                              Code Screen
                           </div>

                           <div
                              className={` bg-white/30 p-1 border-2 border-black rounded-t-lg1 ${
                                 code ? 'h-[565px] w-1/3' : 'h-1/4 w-full'
                              } transition-all duration-500 ease-in-out`}
                           >
                              Output
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
            {/* <div className='flex justify-start min-w-screen min-h-full border-2 m-1'>
               <div className='flex flex-wrap gap-4'>
                  <Card className='mt-6 ml-10 w-64 h-48 bg-yellow-200 border-2 border-cyan-300'>
                     <h1 className='text-center mt-20'>
                        Admin Video Placeholder
                     </h1>
                  </Card>
                  <Card className='mt-6 ml-6 w-64 h-48 bg-yellow-200 border-2 border-cyan-300'>
                     <h1 className='text-center mt-20'>
                        User Video Placeholder
                     </h1>
                  </Card>
                  <Card className='ml-6 bg-blue-400 border-2 border-cyan-300 w-[600px] h-80'>
                     <h1 className='text-center mt-20'>Draw Board</h1>
                  </Card>
               </div>

               <Card className='mt-6 mr-6 mb-6 w-[650px] xl:h-[547px] bg-green-300 border-2 border-cyan-300'>
                  <h1 className='text-center mt-20'>Code Area</h1>
               </Card>
            </div> */}
         </div>
      </>
   )
}
export default AdminScreen
