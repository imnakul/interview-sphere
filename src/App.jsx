import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
   Home,
   ContactSection,
   SignIn,
   Register,
   AdminScreen,
   UserScreen,
   About,
   ForgotPassword,
   AdminDashboard,
   UserDashboard,
   AdminNotes,
   InterviewsManagement,
   UserManagement,
   ScheduleInterview,
   SelectedUsers,
   NotFound,
   InterviewEnd,
   ToggleBackground,
} from './index.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import LightingCard from './components/CardTryOut.jsx'

function App() {
   return (
      <>
         {/* <LightingCard /> */}
         <Router>
            {/* <div className='bg-[linear-gradient(109.6deg,_rgb(9,_9,_121)_11.2%,_rgb(144,_6,_161)_53.7%,_rgb(0,_212,_255)_100.2%)] min-h-screen'> */}
            <ToggleBackground>
               <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/contact' element={<ContactSection />}></Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path='/signin' element={<SignIn />}>
                     <Route
                        path='forgotpassword'
                        element={<ForgotPassword />}
                     />
                  </Route>
                  <Route path='/register' element={<Register />}></Route>
                  <Route
                     path='/admindashboard/:id'
                     element={<AdminDashboard />}
                  >
                     <Route
                        path='usermanagement'
                        element={<UserManagement />}
                     />
                     <Route
                        path='interviewsmanagement'
                        element={<InterviewsManagement />}
                     />
                     <Route path='adminnotes' element={<AdminNotes />} />
                     <Route
                        path='scheduleinterview'
                        element={<ScheduleInterview />}
                     />
                     <Route path='selectedusers' element={<SelectedUsers />} />
                  </Route>
                  <Route
                     path='/userdashboard/:id'
                     element={<UserDashboard />}
                  ></Route>
                  <Route
                     path='/admininterviewscreen'
                     element={<AdminScreen />}
                  ></Route>
                  <Route
                     path='/userinterviewscreen'
                     element={<UserScreen />}
                  ></Route>
                  <Route
                     path='/admininterviewend'
                     element={<InterviewEnd isAdmin={true} />}
                  ></Route>
                  <Route
                     path='/userinterviewend'
                     element={<InterviewEnd isAdmin={false} />}
                  ></Route>
                  <Route path='*' element={<NotFound />}></Route>
                  <Route path='/notfound' element={<NotFound />}></Route>
               </Routes>
            </ToggleBackground>
            <ToastContainer
               position='top-right'
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme='colored'
            />
            {/* </div> */}
         </Router>
      </>
   )
}

export default App
