import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import {
   Button,
   Typography,
   Menu,
   MenuHandler,
   MenuList,
   MenuItem,
   Drawer,
} from '@material-tailwind/react'
import SelectedUsers from '../components/admindashboardcomponents/SelectedUsers'
import ScheduleInterview from '../components/admindashboardcomponents/ScheduleInterview'
import InterviewsManagement from '../components/admindashboardcomponents/InterviewsManagement'
import AdminNotes from '../components/admindashboardcomponents/AdminNotes'
import UserManagement from '../components/admindashboardcomponents/UserManagement'

function AdminDashboard() {
   const [isLoggedIn, setIsLoggedIn] = useState(true)
   const [selectedInterview, setSelectedInterview] = useState(null)
   const navigate = useNavigate()

   const scheduledInterviews = [
      'Interview 1',
      'Interview 2',
      'Interview 3',
      'Interview 4',
      'Interview 5',
      'Interview 6',
   ]

   const handleStartInterview = () => {
      alert(`Starting Interview: ${selectedInterview}`)
      navigate('/admininterviewscreen')
   }

   const usermanagement = useMatch('/admindashboard/usermanagement')
   const scheduleinterview = useMatch('/admindashboard/scheduleinterview')
   const interviewsmanagement = useMatch('/admindashboard/interviewsmanagement')
   const mynotes = useMatch('/admindashboard/adminnotes')
   const selectedusers = useMatch('/admindashboard/selectedusers')

   return (
      <>
         <div className="min-h-screen bg-[url('/fallback.png')] bg-cover bg-center">
            <Navbar isLoggedIn={isLoggedIn} />
            {/* Sidebar */}

            {/* Main Content */}
            <div className='px-4 py-3 bg-white/40 my-10 mx-auto max-w-6xl min-h-[74.5vh]'>
               <header className='mb-3'>
                  <Typography
                     variant='h1'
                     className='font-bold font-serif text-center'
                  >
                     Welcome Back, Admin
                  </Typography>
               </header>
               <div className='flex justify-between bg-transparent min-h-[59vh]'>
                  {/* Sidebar */}
                  <div class='max-w-xs flex flex-col gap-6 rounded-lg shadow-sm w-1/5 p-4 m-2 text-center justify-center bg-white/30'>
                     <button
                        type='button'
                        onClick={() =>
                           navigate('/admindashboard/usermanagement')
                        }
                        class='py-2 px-4 inline-flex items-center gap-x-1 rounded-b-md text-sm font-monospace focus:z-10 border border-black hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none bg-purple-500 hover:bg-purple-700  focus:bg-purple-900 text-white'
                     >
                        User Management
                     </button>
                     <button
                        type='button'
                        onClick={() =>
                           navigate('/admindashboard/interviewsmanagement')
                        }
                        class=' py-2 px-4 inline-flex items-center gap-x-1 rounded-b-md text-sm font-monospace focus:z-10 border border-black hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none bg-purple-500 hover:bg-purple-700  focus:bg-purple-900 text-white'
                     >
                        Interviews Management
                     </button>
                     <button
                        type='button'
                        onClick={() => navigate('/admindashboard/adminnotes')}
                        class=' py-2 px-4 inline-flex items-center gap-x-1 rounded-b-md text-sm font-monospace focus:z-10 border border-black hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none bg-purple-500 hover:bg-purple-700  focus:bg-purple-900 text-white'
                     >
                        My Notes
                     </button>
                     <button
                        type='button'
                        onClick={() =>
                           navigate('/admindashboard/scheduleinterview')
                        }
                        class=' py-2 px-4 inline-flex items-center gap-x-1 rounded-b-md text-sm font-monospace focus:z-10 border border-black hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none bg-purple-500 hover:bg-purple-700  focus:bg-purple-900 text-white'
                     >
                        Schedule an Interview
                     </button>
                     <button
                        type='button'
                        onClick={() =>
                           navigate('/admindashboard/selectedusers')
                        }
                        class=' py-2 px-4 inline-flex items-center gap-x-1 rounded-b-md text-sm font-monospace focus:z-10 border border-black hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none bg-purple-500 hover:bg-purple-700  focus:bg-purple-900 text-white'
                     >
                        Selected Users
                     </button>
                  </div>

                  {/* content show  */}
                  <div className='bg-white/30 w-3/5 m-2 rounded-lg'>
                     {usermanagement && (
                        <>
                           <UserManagement />
                        </>
                     )}
                     {scheduleinterview && (
                        <>
                           <ScheduleInterview />
                        </>
                     )}
                     {interviewsmanagement && (
                        <>
                           <InterviewsManagement />
                        </>
                     )}
                     {mynotes && (
                        <>
                           <AdminNotes />
                        </>
                     )}
                     {selectedusers && (
                        <>
                           <SelectedUsers />
                        </>
                     )}
                  </div>

                  {/* Interviews  */}
                  <div className='bg-white/30 w-1/5 m-2 p-2 rounded-lg items-center'>
                     <p className='mb-0 p-2 text-center text-xl font-semibold font-monospace'>
                        Interviews:
                     </p>
                     <ul class='max-h-[300px] overflow-y-auto pr-3 marker:text-blue-600 list-disc ps-1 space-y-3 text-md text-purple-800 font-sans font-monospace my-2 mx-auto'>
                        <li className='flex justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                           Interview 1
                           <button
                              onClick={() => {
                                 // setSelectedInterview('Interview 1')
                                 handleStartInterview()
                              }}
                              className='bg-green-400 text-black rounded-md border border-purple-500 shadow-sm text-xs py-1 px-1 w-12 disabled:bg-red-400 disabled:text-opacity-60  font-medium disabled:font-normal'
                           >
                              Start
                           </button>
                        </li>
                        <li className='flex justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                           Interview 2{' '}
                           <button
                              onClick={() => {
                                 // setSelectedInterview('Interview 2')
                                 handleStartInterview()
                              }}
                              disabled
                              className='bg-green-400 text-black rounded-md border border-purple-500 shadow-sm text-xs py-1 px-1 w-12 disabled:bg-red-400 disabled:text-opacity-60  font-medium disabled:font-normal'
                           >
                              Start
                           </button>
                        </li>
                        <li className='flex justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                           {' '}
                           Interview 3{' '}
                           <button
                              onClick={() => {
                                 // setSelectedInterview('Interview 3')
                                 handleStartInterview()
                              }}
                              disabled
                              className='bg-green-400 text-black rounded-md border border-purple-500 shadow-sm text-xs py-1 px-1 w-12 disabled:bg-red-400 disabled:text-opacity-60  font-medium disabled:font-normal'
                           >
                              Start
                           </button>
                        </li>
                        <li className='flex justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                           Interview 4{' '}
                           <button
                              onClick={() => {
                                 // setSelectedInterview('Interview 4')
                                 handleStartInterview()
                              }}
                              disabled
                              className='bg-green-400 text-black rounded-md border border-purple-500 shadow-sm text-xs py-1 px-1 w-12 disabled:bg-red-400 disabled:text-opacity-60  font-medium disabled:font-normal'
                           >
                              Start
                           </button>
                        </li>
                        <li className='flex justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                           Interview 5{' '}
                           <button
                              onClick={() => {
                                 // setSelectedInterview('Interview 5')
                                 handleStartInterview()
                              }}
                              disabled
                              className='bg-green-400 text-black rounded-md border border-purple-500 shadow-sm text-xs py-1 px-1 w-12 disabled:bg-red-400 disabled:text-opacity-60  font-medium disabled:font-normal'
                           >
                              Start
                           </button>
                        </li>
                        <li className='flex justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                           Interview 6{' '}
                           <button
                              onClick={() => {
                                 // setSelectedInterview('Interview 6')
                                 handleStartInterview()
                              }}
                              disabled
                              className='bg-green-400 text-black rounded-md border border-purple-500 shadow-sm text-xs py-1 px-1 w-12 disabled:bg-red-400 disabled:text-opacity-60  font-medium disabled:font-normal'
                           >
                              Start
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      </>
   )
}
export default AdminDashboard
