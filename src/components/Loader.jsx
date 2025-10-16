import React, { useEffect } from 'react'

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const onLoaded = () => {
      // keep loader visible a minimum amount to avoid flash
      setTimeout(() => onFinish && onFinish(), 700)
    }

    if (document.readyState === 'complete') {
      onLoaded()
    } else {
      window.addEventListener('load', onLoaded)
      return () => window.removeEventListener('load', onLoaded)
    }
  }, [onFinish])

  return (
    <div className="site-loader fixed inset-0 z-50 flex items-center justify-center">
      <div className="loader-card bg-white/6 backdrop-blur-xl border border-white/8 rounded-2xl p-6 flex flex-col items-center gap-4">
        <div className="loader-spinner" aria-hidden></div>
        <div className="text-sm text-white/90">Preparing HackFest…</div>
      </div>
    </div>
  )
}

export default Loader
