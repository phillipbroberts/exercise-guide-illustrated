#!/bin/bash
# One command to create all essential files for React build

echo "🚀 Creating all essential files..."

# Create public/index.html
mkdir -p public
cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#7C3AED" />
    <meta name="description" content="Interactive exercise guide" />
    <title>Exercise Guide</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
EOF

# Create src/index.js (THE MISSING FILE!)
mkdir -p src
cat > src/index.js << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

# Create src/App.js
cat > src/App.js << 'EOF'
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
EOF

# Create src/index.css
cat > src/index.css << 'EOF'
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  box-sizing: border-box;
}
EOF

echo "✅ All files created!"
echo "📁 Files created:"
echo "  - public/index.html"
echo "  - src/index.js (this was missing!)"
echo "  - src/App.js"
echo "  - src/index.css"
echo ""
echo "🚀 Next steps:"
echo "  git add ."
echo "  git commit -m 'Add essential React files'"
echo "  git push origin main"
echo ""
echo "🎉 Your Vercel build should succeed now!"