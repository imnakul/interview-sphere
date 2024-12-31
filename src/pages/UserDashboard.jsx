import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect, useRef } from 'react'
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

function UserDashboard() {
   const scheduledInterviews = [
      'Interview 1',
      'Interview 2',
      'Interview 3',
      'Interview 4',
      'Interview 5',
      'Interview 6',
   ]
   const [isLoggedIn, setIsLoggedIn] = useState(true)
   const [selectedInterview, setSelectedInterview] = useState('Interview 2')

   const [code, setCode] = useState('')
   const [allChecksCompleted, setAllChecksCompleted] = useState(false) // to check if all checks are completed
   const [cameraPermission, setCameraPermission] = useState(false)
   const [microphonePermission, setMicrophonePermission] = useState(false)
   const [fullscreenEnabled, setFullscreenEnabled] = useState(false)
   const [screenCapturePermission, setScreenCapturePermission] = useState(false)
   const videoRef = useRef(null) // Ref for the video element
   const [isJoining, setIsJoining] = useState(false) // To show spinner when joining interview
   let cameraStream = null
   let screenCaptureStream = null

   // Check permissions from localStorage on page load
   useEffect(() => {
      setCameraPermission(localStorage.getItem('scameraPermission') === 'true')
      setMicrophonePermission(
         localStorage.getItem('smicrophonePermission') === 'true'
      )
      setFullscreenEnabled(
         localStorage.getItem('sfullscreenPermission') === 'true'
      )
      setScreenCapturePermission(
         localStorage.getItem('sscreenCapturePermission') === 'true'
      )
   }, [])

   // Update all checks status
   useEffect(() => {
      const allChecks =
         cameraPermission &&
         microphonePermission &&
         fullscreenEnabled &&
         screenCapturePermission
      setAllChecksCompleted(allChecks)
   }, [
      cameraPermission,
      microphonePermission,
      fullscreenEnabled,
      screenCapturePermission,
   ])

   // Detect fullscreen exit and uncheck fullscreen permission
   useEffect(() => {
      const handleFullscreenChange = () => {
         if (!document.fullscreenElement) {
            alert(
               'FullScreen Exit! Your activity is being monitored, and the admin will be informed.'
            )
            setFullscreenEnabled(false)
            localStorage.setItem('sfullscreenPermission', 'false')
         }
      }
      document.addEventListener('fullscreenchange', handleFullscreenChange)

      return () => {
         document.removeEventListener(
            'fullscreenchange',
            handleFullscreenChange
         )
      }
   }, [])

   // Continuously monitor if camera or microphone gets disabled
   useEffect(() => {
      let cameraStream = null
      let micStream = null

      const checkCameraAndMic = async () => {
         try {
            // Check camera
            cameraStream = await navigator.mediaDevices.getUserMedia({
               video: true,
            })
            if (cameraStream.active) {
               setCameraPermission(true)
               localStorage.setItem('scameraPermission', 'true')
            } else {
               throw new Error('Camera inactive')
            }
         } catch {
            if (cameraPermission) {
               //here cameraPermission is a state variable not storage variable
               alert('Camera turned off! Admin will be informed.')
               setCameraPermission(false)
               localStorage.setItem('scameraPermission', 'false')
            }
         }

         try {
            // Check microphone
            //    micStream = await navigator.mediaDevices.getUserMedia({
            //       audio: true,
            //    })
            //    if (micStream.active) {
            //       setMicPermission(true)
            //       localStorage.setItem('smicrophonePermission', 'true')
            //    } else {
            //       throw new Error('Microphone inactive')
            //    }
            // }
            if (!micStream) {
               micStream = await navigator.mediaDevices.getUserMedia({
                  audio: true,
               })
            }

            if (
               micStream &&
               micStream
                  .getTracks()
                  .some((track) => track.readyState === 'live')
            ) {
               if (!microphonePermission) {
                  setMicrophonePermission(true)
                  localStorage.setItem('smicrophonePermission', 'true')
               }
            } else {
               throw new Error('Microphone inactive')
            }
         } catch {
            if (microphonePermission) {
               alert('Microphone turned off! Admin will be informed.')
               setMicrophonePermission(false)
               localStorage.setItem('smicrophonePermission', 'false')
            }
         }
      }

      const interval = setInterval(checkCameraAndMic, 3000) // Check every 3 seconds

      return () => {
         if (cameraStream)
            cameraStream.getTracks().forEach((track) => track.stop())
         if (micStream) micStream.getTracks().forEach((track) => track.stop())
         clearInterval(interval)
      }
   }, [cameraPermission, microphonePermission])

   // Continuously monitor if screen capture gets disabled
   useEffect(() => {
      const checkScreenCapture = () => {
         if (screenCaptureStream) {
            const isActive = screenCaptureStream
               .getVideoTracks()
               .some((track) => track.readyState === 'live')
            if (!isActive) {
               alert('Screen capture stopped! Admin will be informed.')
               setScreenCapturePermission(false)
               localStorage.setItem('sscreenCapturePermission', 'false')
               screenCaptureStream = null // Clear the stream reference
            }
         }
      }

      const interval = setInterval(checkScreenCapture, 3000) // Check every 3 seconds

      return () => {
         //    if (screenCaptureStream)
         //       screenCaptureStream.getTracks().forEach((track) => track.stop())
         //    clearInterval(interval)
         // }
         // Clean up the stream and interval on component unmount
         if (screenCaptureStream) {
            screenCaptureStream.getTracks().forEach((track) => track.stop())
         }
         if (cameraStream) {
            cameraStream.getTracks().forEach((track) => track.stop())
         }
         clearInterval(interval)
      }
   }, [screenCaptureStream, screenCapturePermission])

   // Enable Camera Access
   const requestCameraAccess = async () => {
      try {
         // Stop any existing camera stream if already active
         if (cameraStream) {
            cameraStream.getTracks().forEach((track) => track.stop())
            cameraStream = null
         }

         const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
         })
         if (stream) {
            setCameraPermission(true)
            localStorage.setItem('scameraPermission', 'true')
            checkAllPermissions()
            cameraStream = stream // Update the camera stream reference
         }
         // Attach the stream to the video element
         if (videoRef.current) {
            videoRef.current.srcObject = cameraStream
            videoRef.current.play()
         }
      } catch (error) {
         alert('Camera permission denied. Please allow access to continue.')
         setCameraPermission(false)
         localStorage.setItem('scameraPermission', 'false')
      }
   }

   //Enable Microphone Access
   const requestMicrophoneAccess = async () => {
      try {
         const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
         })
         if (stream) {
            setMicrophonePermission(true)
            localStorage.setItem('smicrophonePermission', 'true')
            checkAllPermissions()
         }
      } catch (error) {
         alert('Microphone permission denied. Please allow access to continue.')
      }
   }

   // Enable Fullscreen Mode
   const handleFullscreenPermission = () => {
      const elem = document.documentElement
      if (elem.requestFullscreen) {
         elem.requestFullscreen().then(() => {
            setFullscreenEnabled(true)
            localStorage.setItem('sfullscreenPermission', 'true')
         })
      } else {
         alert('Fullscreen mode is not supported in your browser!')
      }
   }

   // Enable Screen Capture
   const handleScreenCapturePermission = async () => {
      try {
         screenCaptureStream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
         })
         if (screenCaptureStream) {
            setScreenCapturePermission(true)
            localStorage.setItem('sscreenCapturePermission', 'true')

            // Handle manual stop of the screen share by the user
            screenCaptureStream.getVideoTracks()[0].onended = () => {
               alert('Screen capture stopped! Admin will be informed.')
               setScreenCapturePermission(false)
               localStorage.setItem('sscreenCapturePermission', 'false')
               screenCaptureStream = null // Clear the stream reference
            }
         }
      } catch (err) {
         alert('Screen capture permission denied!')
         setScreenCapturePermission(false)
         localStorage.setItem('sscreenCapturePermission', 'false')
      }
   }

   // Function to handle input
   const handleInputChange = (e) => {
      const value = e.target.value
      // Allow only numbers and limit to 6 digits
      if (/^\d{0,6}$/.test(value)) {
         setCode(value)
      }
   }

   const handleStartInterview = () => {
      // console.log('Interview Started')
      setIsJoining(true) // Show spinner
      setTimeout(() => {
         navigate('/userinterviewscreen') // Replace with the actual route
      }, 1000) // 3 seconds delay
   }

   const checkAllPermissions = () => {
      if (
         cameraPermission &&
         microphonePermission &&
         fullscreenEnabled &&
         screenCapturePermission
      ) {
         setAllChecksCompleted(true)
      }
   }

   return (
      <>
         <Navbar isLoggedIn={isLoggedIn} />
         {/* Sidebar */}

         {/* Main Content */}
         <div className='px-4 py-3 mt-4 mb-10 mx-auto max-w-7xl min-h-[74.5vh]'>
            <header className='mb-3'>
               <Typography
                  variant='h1'
                  className='font-bold font-serif text-center'
               >
                  Welcome Back, User
               </Typography>
            </header>
            <div className='flex justify-between bg-transparent min-h-[59vh]'>
               {/* Sidebar */}
               {!isJoining && (
                  <>
                     <div
                        className={` flex flex-col  rounded-lg shadow-sm p-4 m-2 text-center justify-evenly bg-white/30 transition-all duration-500 ease-in-out w-1/2
                              
                           }`}
                     >
                        <div className='bg-white/30 m-1 p-2 rounded-lg items-center'>
                           <p className='mb-0 p-2 text-center text-xl font-semibold font-monospace'>
                              Interview Avaialble to Join:
                           </p>
                           <div className='flex justify-between items-center border-2 border-black rounded-b-md py-1 pl-3 pr-2'>
                              Interview 2
                              <button
                                 onClick={(e) => {
                                    e.preventDefault()
                                    alert(
                                       `Before Joining Interview, Complete System Requirements first!`
                                    )
                                 }}
                                 disabled={selectedInterview === null}
                                 className='bg-green-400 text-black rounded-md border border-black shadow-sm text-md py-1 px-1 w-20 disabled:bg-red-400 disabled:text-opacity-60  font-medium disabled:font-normal'
                              >
                                 Proceed
                              </button>
                           </div>
                        </div>

                        {/* 2nd part */}
                        <div className=' bg-white/30 m-1 p-2 rounded-lg items-center'>
                           <p className='mb-0 p-2 text-center text-xl font-semibold font-monospace'>
                              Join Interview with Code:
                           </p>
                           <div className='flex flex-col justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                              Enter Code Below to Join:
                              <div className='flex gap-4 my-2 items-center justify-evenly'>
                                 <input
                                    id='interview-code'
                                    type='text'
                                    inputMode='numeric'
                                    maxLength='6'
                                    value={code}
                                    onChange={handleInputChange}
                                    placeholder='XXXXXX'
                                    className='w-32 p-2 text-center border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-black placeholder-dashed'
                                 />
                                 <button
                                    onClick={(e) => {
                                       e.preventDefault()
                                       if (code === '123456') {
                                          alert(
                                             `To Join Interview with code: ${code}, Complete System Requirements first!`
                                          )

                                          // handleStartInterview()
                                       } else {
                                          alert('Invalid Code')
                                       }
                                    }}
                                    disabled={selectedInterview === null}
                                    className='bg-green-400 text-black rounded-md border border-black shadow-sm text-md py-1 px-1 w-20 disabled:bg-red-400 disabled:text-opacity-60 font-medium disabled:font-normal'
                                 >
                                    Proceed
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </>
               )}

               {/* content show  */}

               <div
                  className={`bg-white/30 m-2 p-2 min-h-3/4 rounded-lg items-center w-1/2 transition-all duration-500 ease-in-out`}
               >
                  <p className='mb-0 mt-4 p-2 text-center text-xl font-semibold font-monospace'>
                     System Requirements:
                  </p>
                  <div className='p-4 flex justify-start gap-2 '>
                     <div className='p-1 w-1/2 items-center '>
                        <ul class='space-y-4 font-medium text-gray-900 bg-white/30 border border-black rounded-lg rounded-t-lg py-2 mb-3'>
                           <li class='w-full border-b border-gray-200 rounded-t-lg'>
                              <div class='flex items-center ps-3'>
                                 <input
                                    id='vue-checkbox'
                                    type='checkbox'
                                    value=''
                                    class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  '
                                    onClick={requestCameraAccess}
                                    checked={cameraPermission} // Bind the checkbox state to cameraPermission
                                 />
                                 <label
                                    for='vue-checkbox'
                                    class='w-full py-3 ms-2 text-md font-medium text-gray-900 '
                                 >
                                    Camera Permission
                                 </label>
                              </div>
                           </li>
                           <li class='w-full border-b border-gray-200 rounded-t-lg '>
                              <div class='flex items-center ps-3'>
                                 <input
                                    id='react-checkbox'
                                    type='checkbox'
                                    value=''
                                    class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
                                    onClick={requestMicrophoneAccess}
                                    checked={microphonePermission} // Bind the checkbox state to microphonePermission
                                    readOnly // Prevent direct toggling since state determines checked status
                                 />
                                 <label
                                    for='react-checkbox'
                                    class='w-full py-3 ms-2 text-md font-medium text-gray-900 '
                                 >
                                    Microphone Permission
                                 </label>
                              </div>
                           </li>
                           <li class='w-full border-b border-gray-200 rounded-t-lg '>
                              <div class='flex items-center ps-3'>
                                 <input
                                    id='angular-checkbox'
                                    type='checkbox'
                                    value=''
                                    class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
                                    onClick={handleScreenCapturePermission}
                                    checked={screenCapturePermission} // Bind the checkbox state to screenCapturePermission
                                 />
                                 <label
                                    for='angular-checkbox'
                                    class='w-full py-3 ms-2 text-md font-medium text-gray-900 '
                                 >
                                    Screen Capture Permission
                                 </label>
                              </div>
                           </li>
                           <li class='w-full border-b border-gray-200 rounded-t-lg '>
                              <div class='flex items-center ps-3'>
                                 <input
                                    id='laravel-checkbox'
                                    type='checkbox'
                                    value=''
                                    class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
                                    onClick={handleFullscreenPermission}
                                    checked={fullscreenEnabled} // Bind the checkbox state to fullscreenEnabled
                                 />
                                 <label
                                    for='laravel-checkbox'
                                    class='w-full py-3 ms-2 text-md font-medium text-gray-900'
                                 >
                                    Full Screen
                                 </label>
                              </div>
                           </li>
                        </ul>

                        {/* Join Button */}
                        <div className='flex justify-center'>
                           <button
                              disabled={!allChecksCompleted}
                              className={`mt-4 p-1 text-black rounded-md border border-black shadow-sm text-md w-16 ${
                                 allChecksCompleted
                                    ? 'bg-green-400 opacity-100'
                                    : 'bg-red-400 opacity-50'
                              }`}
                              onClick={handleStartInterview}
                           >
                              Join
                           </button>
                        </div>
                     </div>

                     <div className='flex flex-col gap-2 text-md font-semibold font-monospace items-center justify-start p-4 min-w-1/3 '>
                        <h3>Camera Preview:</h3>
                        {cameraPermission && (
                           <div>
                              <video
                                 ref={videoRef}
                                 style={{
                                    width: '260px',
                                    height: '188px',
                                    border: '2px solid #fff',
                                    borderRadius: '8px',
                                    rounded: '8px',
                                 }}
                              ></video>
                           </div>
                        )}
                     </div>
                  </div>
               </div>

               {/* Interviews  */}
               {allChecksCompleted && isJoining && (
                  <div className='bg-white/60 w-1/2 m-1 p-1 items-center flex flex-col rounded-lg transition-all duration-500 ease-in-out'>
                     <img src='/atb.png' alt='' className='w-36 h-36' />
                     <img src='/dyb.png' alt='' className='w-72 h-64' />
                     <button
                        disabled
                        type='button'
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                     >
                        <svg
                           aria-hidden='true'
                           role='status'
                           className='inline w-4 h-4 me-3 text-white animate-spin'
                           viewBox='0 0 100 101'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                              fill='#E5E7EB'
                           />
                           <path
                              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                              fill='currentColor'
                           />
                        </svg>
                        Joining...
                     </button>
                  </div>
               )}
            </div>
         </div>
         <Footer />
      </>
   )
}
export default UserDashboard
