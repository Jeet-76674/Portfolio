import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const glow = glowRef.current
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Glow follows immediately
      if (glow) {
        glow.style.left = `${mouseX}px`
        glow.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      // Smooth follow for cursor dot
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15

      if (cursor) {
        cursor.style.left = `${cursorX}px`
        cursor.style.top = `${cursorY}px`
      }

      requestAnimationFrame(animate)
    }

    const onMouseEnterInteractive = () => {
      if (cursor) {
        cursor.style.width = '40px'
        cursor.style.height = '40px'
        cursor.style.backgroundColor = 'rgba(255,85,51,0.2)'
        cursor.style.borderColor = '#ff5533'
      }
    }

    const onMouseLeaveInteractive = () => {
      if (cursor) {
        cursor.style.width = '20px'
        cursor.style.height = '20px'
        cursor.style.backgroundColor = 'transparent'
        cursor.style.borderColor = '#ff5533'
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()

    // Attach hover listeners to interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    // Re-attach on DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
      newInteractives.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 border-2 border-accent bg-transparent hidden md:block"
        style={{ transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease' }}
      />
      {/* Radial glow that follows the mouse */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9990] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,85,51,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </>
  )
}

export default CustomCursor
