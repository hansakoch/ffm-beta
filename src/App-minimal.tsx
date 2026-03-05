import React from 'react'

function AppMinimal() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '3rem',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        maxWidth: '600px'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          ✓ React App is Working!
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>
          FansFollow Preview Test
        </p>
        <div style={{
          padding: '1rem 2rem',
          background: '#10b981',
          borderRadius: '50px',
          display: 'inline-block',
          fontWeight: 'bold',
          marginBottom: '2rem'
        }}>
          React Rendering Successfully
        </div>
        <p style={{ opacity: 0.7, marginTop: '2rem' }}>
          If you see this, your React app is rendering correctly.
          <br/>
          The issue may be with a specific component.
        </p>
      </div>
    </div>
  )
}

export default AppMinimal
