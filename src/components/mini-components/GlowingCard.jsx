import React, { useRef, useState } from 'react'

const GlowingCard = ({ content }) => {
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
      <div
         ref={cardRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         className='relative bg-transparent/50 rounded-xl p-8 md:p-10 mb-8'
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
                        rgba(255, 255, 255, 0.8) 0%, 
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

         {/* Glow Effect - inside*/}
         {isHovered && (
            <div
               className='absolute inset-0 rounded-lg pointer-events-none'
               style={{
                  background: `radial-gradient(circle at ${glowPosition.x} ${glowPosition.y}, rgba(255,255, 255, 0.3), transparent 35%)`,
                  transition: 'background 0.2s ease',
               }}
            ></div>
         )}

         {/* Content */}
         {content}
      </div>
   )
}

export default GlowingCard
