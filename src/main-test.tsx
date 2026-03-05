import React from 'react'
import ReactDOM from 'react-dom/client'
import AppMinimal from './App-minimal.tsx'

console.log('=== FANSFOLLOW DIAGNOSTICS ===')
console.log('✓ main-test.tsx loaded')
console.log('✓ React imported')
console.log('✓ ReactDOM imported')
console.log('✓ App component imported')

const rootElement = document.getElementById('root')
console.log('✓ Root element:', rootElement)

if (rootElement) {
  console.log('✓ Creating React root...')
  const root = ReactDOM.createRoot(rootElement)
  console.log('✓ Rendering app...')
  root.render(
    <React.StrictMode>
      <AppMinimal />
    </React.StrictMode>,
  )
  console.log('✓ App render complete!')
} else {
  console.error('✗ Root element not found!')
  document.body.innerHTML = '<div style="padding: 2rem; color: red; font-size: 2rem;">ERROR: Root element not found!</div>'
}
