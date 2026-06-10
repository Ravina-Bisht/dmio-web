function FloatingParticles() {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className='absolute bg-lavender/30 rounded-full animate-pulse'
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles