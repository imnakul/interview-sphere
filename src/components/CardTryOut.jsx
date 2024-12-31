// import React, { useRef } from 'react'

// const LightingCard = () => {
//    const cardRef = useRef(null)

//    const handleMouseMove = (e) => {
//       const card = cardRef.current

//       // Get card dimensions and cursor position
//       const { left, top, width, height } = card.getBoundingClientRect()
//       const x = e.clientX - left // X position relative to card
//       const y = e.clientY - top // Y position relative to card

//       // Calculate shadow direction (same direction as cursor movement)
//       const xOffset = ((x - width / 2) / width) * 20 // Range: -10px to +10px
//       const yOffset = ((y - height / 2) / height) * 20

//       // Update shadow in the same direction
//       card.style.boxShadow = `${xOffset}px ${yOffset}px 20px rgba(0, 255, 0, 0.4)`
//       card.style.transition = 'box-shadow 0.2s ease' // Smooth animation

//       // Border logic: Show border on the side nearest to the cursor
//       const borderStyles = {
//          top: y < height / 4 ? '1px solid rgba(0, 255, 0, 0.8)' : 'none',
//          bottom:
//             y > (3 * height) / 4 ? '1px solid rgba(0, 255, 0, 0.8)' : 'none',
//          left: x < width / 4 ? '1px solid rgba(0, 255, 0, 0.8)' : 'none',
//          right: x > (3 * width) / 4 ? '1px solid rgba(0, 255, 0, 0.8)' : 'none',
//       }

//       card.style.borderTop = borderStyles.top
//       card.style.borderBottom = borderStyles.bottom
//       card.style.borderLeft = borderStyles.left
//       card.style.borderRight = borderStyles.right
//    }

//    const handleMouseLeave = () => {
//       const card = cardRef.current

//       // Reset styles
//       card.style.boxShadow = 'none'
//       card.style.border = 'none'
//    }

//    return (
//       <div className='flex items-center justify-center h-screen bg-gray-900'>
//          <div
//             ref={cardRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className='relative h-64 w-96 rounded-lg bg-gray-800 overflow-hidden'
//          >
//             {/* Content */}
//             <div className='flex items-center justify-center h-full text-white text-2xl font-semibold'>
//                Hover Me!
//             </div>
//          </div>
//       </div>
//    )
// }

// export default LightingCard

// import React, { useRef } from 'react'

// const LightingCard = () => {
//    const cardRef = useRef(null)

//    const handleMouseMove = (e) => {
//       const card = cardRef.current

//       // Get card dimensions and cursor position
//       const { left, top, width, height } = card.getBoundingClientRect()
//       const x = e.clientX - left // X position relative to card
//       const y = e.clientY - top // Y position relative to card

//       // Calculate shadow offsets based on position
//       const xPercent = x / width // 0 (left) to 1 (right)
//       const yPercent = y / height // 0 (top) to 1 (bottom)

//       // Shadow effect localized near cursor
//       const shadowX = (xPercent - 0.4) * 50 // Shadow offset in X
//       const shadowY = (yPercent - 0.4) * 50 // Shadow offset in Y
//       const blur = 50 // Blur effect for the shadow
//       const shadowColor = 'rgba(0, 255, 0, 0.2)'

//       // Dynamic gradient border effect
//       const gradientSize = 20 // Length of the gradient
//       const gradientDirection = `
//          linear-gradient(${90 + (xPercent - 0.5) * 90}deg,
//          rgba(0, 255, 0, 0.6) 0%,
//          rgba(0, 0, 0, 0) ${gradientSize}%)`

//       card.style.boxShadow = `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`
//       card.style.borderImage = `${gradientDirection} 1`
//       card.style.borderWidth = '2px'
//       card.style.borderStyle = 'solid'
//       card.style.transition = 'box-shadow 0.15s ease, border 0.2s ease'
//    }

//    const handleMouseLeave = () => {
//       const card = cardRef.current

//       // Reset styles
//       card.style.boxShadow = 'none'
//       card.style.border = 'none'
//    }

//    return (
//       <div className='flex items-center justify-center h-screen bg-gray-900'>
//          <div
//             ref={cardRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className='relative h-64 w-96 rounded-lg bg-gray-800 overflow-hidden'
//          >
//             {/* Content */}
//             <div className='flex items-center justify-center h-full text-white text-2xl font-semibold'>
//                Hover Me!
//             </div>
//          </div>
//       </div>
//    )
// }

// export default LightingCard

// import React, { useRef } from 'react'

// const LightingCard = () => {
//    const cardRef = useRef(null)

//    const handleMouseMove = (e) => {
//       const card = cardRef.current

//       // Get card dimensions and cursor position
//       const { left, top, width, height } = card.getBoundingClientRect()
//       const x = e.clientX - left // X position relative to card
//       const y = e.clientY - top // Y position relative to card

//       // Calculate shadow offsets based on position
//       const xPercent = x / width // 0 (left) to 1 (right)
//       const yPercent = y / height // 0 (top) to 1 (bottom)

//       // Shadow effect localized near cursor
//       const shadowX = (xPercent - 0.5) * 50 // Shadow offset in X
//       const shadowY = (yPercent - 0.5) * 50 // Shadow offset in Y
//       const blur = 50 // Blur effect for the shadow
//       const shadowColor = 'rgba(0, 255, 0, 0.2)'

//       // Fix the gradient angle to match shadow direction
//       const angle =
//          Math.atan2(yPercent - 0.5, xPercent - 0.5) * (180 / Math.PI) + 270
//       const gradientSize = 20 // Length of the gradient
//       const gradientDirection = `
//          linear-gradient(${angle}deg,
//          rgba(0, 255, 0, 0.6) 0%,
//          rgba(0, 0, 0, 0) ${gradientSize}%)`

//       // Apply styles
//       card.style.boxShadow = `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`
//       card.style.borderImage = `${gradientDirection} 1`
//       card.style.borderWidth = '2px'
//       card.style.borderStyle = 'solid'
//       card.style.transition = 'box-shadow 0.15s ease, border 0.2s ease'
//    }

//    const handleMouseLeave = () => {
//       const card = cardRef.current

//       // Reset styles
//       card.style.boxShadow = 'none'
//       card.style.border = 'none'
//    }

//    return (
//       <div className='flex items-center justify-center h-screen bg-gray-900'>
//          <div
//             ref={cardRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className='relative h-64 w-96 rounded-lg bg-gray-800 overflow-hidden'
//          >
//             {/* Content */}
//             <div className='flex items-center justify-center h-full text-white text-2xl font-semibold'>
//                Hover Me!
//             </div>
//          </div>
//       </div>
//    )
// }

// export default LightingCard

// import React, { useRef } from 'react'

// const LightingCard = () => {
//    const cardRef = useRef(null)

//    const handleMouseMove = (e) => {
//       const card = cardRef.current

//       // Get card dimensions and cursor position
//       const { left, top, width, height } = card.getBoundingClientRect()
//       const x = e.clientX - left // X position relative to card
//       const y = e.clientY - top // Y position relative to card

//       // Calculate cursor position percentages
//       const xPercent = x / width // 0 (left) to 1 (right)
//       const yPercent = y / height // 0 (top) to 1 (bottom)

//       // Reduce shadow length to match border size
//       const shadowOffset = 15 // Shadow range (matches border gradient size)

//       let shadowX = 0
//       let shadowY = 0

//       // Apply shadow only on one side matching border position
//       if (xPercent < 0.25) shadowX = -shadowOffset // Left side
//       if (xPercent > 0.75) shadowX = shadowOffset // Right side
//       if (yPercent < 0.25) shadowY = -shadowOffset // Top side
//       if (yPercent > 0.75) shadowY = shadowOffset // Bottom side

//       const blur = 30 // Controlled blur for subtle effect
//       const shadowColor = 'rgba(0, 255, 0, 0.2)' // Shadow color

//       // Fix the gradient angle for border
//       const angle =
//          Math.atan2(yPercent - 0.5, xPercent - 0.5) * (180 / Math.PI) + 270
//       const gradientSize = 20 // Border length
//       const gradientDirection = `
//          linear-gradient(${angle}deg,
//          rgba(0, 255, 0, 0.6) 0%,
//          rgba(0, 0, 0, 0) ${gradientSize}%)`

//       // Apply styles
//       card.style.boxShadow = `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`
//       card.style.borderImage = `${gradientDirection} 1`
//       card.style.borderWidth = '2px'
//       card.style.borderStyle = 'solid'
//       card.style.transition = 'box-shadow 0.15s ease, border 0.2s ease'
//    }

//    const handleMouseLeave = () => {
//       const card = cardRef.current

//       // Reset styles
//       card.style.boxShadow = 'none'
//       card.style.border = 'none'
//    }

//    return (
//       <div className='flex items-center justify-center h-screen bg-gray-900'>
//          <div
//             ref={cardRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className='relative h-64 w-96 rounded-lg bg-gray-800 overflow-hidden'
//          >
//             {/* Content */}
//             <div className='flex items-center justify-center h-full text-white text-2xl font-semibold'>
//                Hover Me!
//             </div>
//          </div>
//       </div>
//    )
// }

// export default LightingCard

// working pefectly below code

// import React, { useRef, useState } from 'react'

// const LightingCard = () => {
//    const cardRef = useRef(null)
//    const [glowPosition, setGlowPosition] = useState({ x: '50%', y: '50%' })

//    const handleMouseMove = (e) => {
//       const card = cardRef.current

//       // Get card dimensions and cursor position
//       const { left, top, width, height } = card.getBoundingClientRect()
//       const x = e.clientX - left // X position relative to card
//       const y = e.clientY - top // Y position relative to card

//       // Cursor position percentages
//       const xPercent = x / width // 0 (left) to 1 (right)
//       const yPercent = y / height // 0 (top) to 1 (bottom)

//       // Glow Effect Position
//       setGlowPosition({ x: `${xPercent * 100}%`, y: `${yPercent * 100}%` })

//       // Border Gradient Angle
//       const angle =
//          Math.atan2(yPercent - 0.5, xPercent - 0.5) * (180 / Math.PI) + 270

//       // Apply border gradient as a CSS variable
//       card.style.setProperty('--border-angle', `${angle}deg`)
//    }

//    const handleMouseLeave = () => {
//       setGlowPosition({ x: '50%', y: '50%' })
//    }

//    return (
//       <div className='flex items-center justify-center min-h-screen bg-gray-900'>
//          <div
//             ref={cardRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className='relative h-64 w-96 rounded-lg bg-gray-800 overflow-hidden'
//          >
//             {/* Border Gradient (Pseudo-element) */}
//             <div
//                className='absolute inset-0 pointer-events-none rounded-lg'
//                style={{
//                   content: "''",
//                   border: '3px solid transparent',
//                   borderRadius: '0.75rem',
//                   background: `
//                      linear-gradient(var(--border-angle, 90deg),
//                      rgba(0, 255, 255, 0.8) 0%,
//                      transparent 20%)
//                      border-box`,
//                   mask: `
//                      linear-gradient(white, white) padding-box,
//                      linear-gradient(white, white)`,
//                   maskComposite: 'exclude',
//                   WebkitMaskComposite: 'destination-out',
//                   transition: 'background 0.2s ease',
//                }}
//             ></div>

//             {/* Glow Effect */}
//             <div
//                className='absolute inset-0 rounded-lg pointer-events-none'
//                style={{
//                   background: `radial-gradient(circle at ${glowPosition.x} ${glowPosition.y}, rgba(0, 255, 255, 0.3), transparent 50%)`,
//                   transition: 'background 0.2s ease',
//                }}
//             ></div>

//             {/* Content */}
//             <div className='relative z-10 flex items-center justify-center h-full text-white text-2xl font-semibold'>
//                Hover Me!
//             </div>
//          </div>
//       </div>
//    )
// }

// export default LightingCard

//working perfectly without bydefault center and border

import React, { useRef, useState } from 'react'

const LightingCard = () => {
   const cardRef = useRef(null)
   const [glowPosition, setGlowPosition] = useState({ x: '50%', y: '50%' })
   const [isHovered, setIsHovered] = useState(false) // To control visibility

   const handleMouseMove = (e) => {
      setIsHovered(true) // Show glow and border on hover

      const card = cardRef.current

      // Get card dimensions and cursor position
      const { left, top, width, height } = card.getBoundingClientRect()
      const x = e.clientX - left // X position relative to card
      const y = e.clientY - top // Y position relative to card

      // Cursor position percentages
      const xPercent = x / width // 0 (left) to 1 (right)
      const yPercent = y / height // 0 (top) to 1 (bottom)

      // Update glow position
      setGlowPosition({ x: `${xPercent * 100}%`, y: `${yPercent * 100}%` })

      // Border Gradient Angle
      const angle =
         Math.atan2(yPercent - 0.5, xPercent - 0.5) * (180 / Math.PI) + 270

      // Apply border gradient as a CSS variable
      card.style.setProperty('--border-angle', `${angle}deg`)
   }

   const handleMouseLeave = () => {
      setIsHovered(false) // Hide glow and border on mouse leave
   }

   return (
      <div className='flex items-center justify-center min-h-screen bg-gray-900'>
         <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className='relative h-64 w-96 rounded-lg bg-gray-800 overflow-hidden'
         >
            {/* Border Gradient (Pseudo-element) */}
            {isHovered && (
               <div
                  className='absolute inset-0 pointer-events-none rounded-lg'
                  style={{
                     content: "''",
                     border: '3px solid transparent',
                     borderRadius: '0.75rem',
                     background: `
                        linear-gradient(var(--border-angle, 90deg),
                        rgba(0, 255, 255, 0.8) 0%, 
                        transparent 20%)
                        border-box`,
                     mask: `
                        linear-gradient(white, white) padding-box,
                        linear-gradient(white, white)`,
                     maskComposite: 'exclude',
                     WebkitMaskComposite: 'destination-out',
                     transition: 'background 0.2s ease',
                  }}
               ></div>
            )}

            {/* Glow Effect */}
            {isHovered && (
               <div
                  className='absolute inset-0 rounded-lg pointer-events-none'
                  style={{
                     background: `radial-gradient(circle at ${glowPosition.x} ${glowPosition.y}, rgba(0, 255, 255, 0.3), transparent 50%)`,
                     transition: 'background 0.2s ease',
                  }}
               ></div>
            )}

            {/* Content */}
            <div className='relative z-10 flex items-center justify-center h-full text-white text-2xl font-semibold'>
               Hover Me!
            </div>
         </div>
      </div>
   )
}

export default LightingCard
