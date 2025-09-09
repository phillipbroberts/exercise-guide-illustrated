import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #faf5ff, #e0e7ff)',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '1rem'
        }}>
          🎉 Exercise Guide is Live!
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          Your React app is successfully deployed. Ready to add exercise components!
        </p>
        <div style={{
          background: 'white',
          borderRadius: '0.75rem',
          padding: '2rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ color: '#7c3aed', marginBottom: '1rem' }}>✅ Build Successful</h2>
          <p style={{ color: '#059669' }}>
            All essential files created. Vercel deployment working!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
