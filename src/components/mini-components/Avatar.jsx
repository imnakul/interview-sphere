import React from 'react'
import {
   Avatar,
   Button,
   Menu,
   MenuHandler,
   MenuItem,
   MenuList,
   Typography,
} from '@material-tailwind/react'
import {
   Cog6ToothIcon,
   InboxArrowDownIcon,
   LifebuoyIcon,
   PowerIcon,
   UserCircleIcon,
} from '@heroicons/react/24/solid'

// profile menu component
const profileMenuItems = [
   {
      label: 'My Profile',
      icon: UserCircleIcon,
      href: '#',
      onClick: () => {
         console.log('profile')
      },
   },
   {
      label: 'Edit Profile',
      icon: Cog6ToothIcon,
   },
   {
      label: 'Inbox',
      icon: InboxArrowDownIcon,
   },
   {
      label: 'Help',
      icon: LifebuoyIcon,
   },
   {
      label: 'Sign Out',
      icon: PowerIcon,
   },
]

function AvatarWithUserDropdown() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false)

   const closeMenu = () => setIsMenuOpen(false)

   return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
         <MenuHandler>
            <Button
               variant='text'
               color='blue-gray'
               className='flex items-center rounded-full p-0'
            >
               <Avatar
                  alt='user name'
                  withBorder={true}
                  className=' p-0.5 w-10 h-10'
                  src='https://docs.material-tailwind.com/img/face-2.jpg'
               />
            </Button>
         </MenuHandler>
         <Typography variant='h6' className='xl:pt-0 pt-2'>
            User Name
         </Typography>
         <MenuList className='p-1 min-w-[40px] items-center'>
            {profileMenuItems.map(({ label, icon }, key) => {
               const isLastItem = key === profileMenuItems.length - 1
               return (
                  <MenuItem
                     key={label}
                     onClick={closeMenu}
                     className={`flex items-center gap-2 rounded w-32 ${
                        isLastItem
                           ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                           : ''
                     }`}
                  >
                     {React.createElement(icon, {
                        className: `h-4 w-4 ${
                           isLastItem ? 'text-red-500' : ''
                        }`,
                        strokeWidth: 2,
                     })}
                     <Typography
                        as='span'
                        variant='small'
                        className='font-normal'
                        color={isLastItem ? 'red' : 'inherit'}
                     >
                        {label}
                     </Typography>
                  </MenuItem>
               )
            })}
         </MenuList>
      </Menu>
   )
}

export default AvatarWithUserDropdown
