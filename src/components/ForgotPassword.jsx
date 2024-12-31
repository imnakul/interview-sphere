import { Typography, Button } from '@material-tailwind/react'
function ForgotPassword() {
   return (
      <>
         <section className='grid text-center items-center max-w-[36rem] mx-auto mt-48 bg-white/40 p-3 rounded-md'>
            <Typography variant='h2' color='blue-gray' className='mb-3'>
               Forgot Password
            </Typography>

            <Typography className=' text-black font-normal text-[18px] mb-3'>
               Enter your email to recieve Reset Password Link!
            </Typography>
            <div className='flex gap-4 justify-around rounded-xl p-3'>
               <input
                  placeholder='Email'
                  type='email'
                  id='email'
                  className='p-2 rounded-md border border-black w-2/3'
               ></input>
               <Button
                  variant='outlined'
                  size='sm'
                  className='w-20 h-10 text-md bg-blue-500 hover:bg-blue-800 text-white p-2 focus:ring-blue-300 focus:outline-none focus:ring-2'
               >
                  Send
               </Button>
            </div>
         </section>
      </>
   )
}
export default ForgotPassword
