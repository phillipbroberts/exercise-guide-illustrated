import React, { useState } from 'react';

const ExerciseGuide = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mountain Climber Animation
  const MountainClimber = ({ phase = 0 }) => (
    <svg viewBox="0 0 400 200" style={{ width: '100%', height: '200px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9fafb' }}>
      <line x1="0" y1="160" x2="400" y2="160" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="80" y1="120" x2="80" y2="160" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
      <line x1="120" y1="120" x2="120" y2="160" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
      <line x1="100" y1="120" x2="250" y2="120" stroke="#4F46E5" strokeWidth="12" strokeLinecap="round" />
      <circle cx="70" cy="110" r="15" fill="#F59E0B" stroke="#4F46E5" strokeWidth="2" />
      
      {phase === 0 ? (
        <g>
          <line x1="250" y1="120" x2="320" y2="120" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
          <line x1="320" y1="120" x2="320" y2="160" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
          <line x1="250" y1="120" x2="210" y2="90" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
          <line x1="210" y1="90" x2="190" y2="120" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <line x1="250" y1="120" x2="200" y2="100" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
          <line x1="200" y1="100" x2="180" y2="130" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
          <line x1="250" y1="120" x2="320" y2="140" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
          <line x1="320" y1="140" x2="340" y2="160" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
        </g>
      )}
      
      <text x="150" y="40" style={{ fontSize: '14px', fontWeight: '600', fill: '#7C3AED' }}>
        {phase === 0 ? 'Right knee up' : 'Left knee up'}
      </text>
    </svg>
  );

  // Pistol Squat Illustration
  const PistolSquat = ({ phase = 0 }) => (
    <svg viewBox="0 0 300 400" style={{ width: '100%', height: '250px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9fafb' }}>
      <line x1="0" y1="350" x2="300" y2="350" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
      <circle cx="150" cy={phase === 0 ? "60" : "120"} r="20" fill="#F59E0B" stroke="#4F46E5" strokeWidth="2" />
      <line x1="150" y1={phase === 0 ? "80" : "140"} x2="150" y2={phase === 0 ? "200" : "260"} stroke="#4F46E5" strokeWidth="15" strokeLinecap="round" />
      <line x1="150" y1={phase === 0 ? "200" : "260"} x2="150" y2="350" stroke="#4F46E5" strokeWidth="12" strokeLinecap="round" />
      <line x1="150" y1={phase === 0 ? "200" : "260"} x2={phase === 0 ? "220" : "250"} y2={phase === 0 ? "180" : "240"} stroke="#EF4444" strokeWidth="10" strokeLinecap="round" />
      <line x1={phase === 0 ? "220" : "250"} y1={phase === 0 ? "180" : "240"} x2={phase === 0 ? "280" : "320"} y2={phase === 0 ? "200" : "280"} stroke="#EF4444" strokeWidth="10" strokeLinecap="round" />
      
      <text x="10" y="30" style={{ fontSize: '14px', fontWeight: '700', fill: '#7C3AED' }}>
        {phase === 0 ? 'Starting Position' : 'Bottom Position'}
      </text>
    </svg>
  );

  React.useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPhase(prev => prev === 0 ? 1 : 0);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const exercises = [
    {
      name: 'Mountain Climbers',
      sets: '3x20 (10 each leg)',
      description: 'Start in plank position. Drive knees alternately toward elbows.',
      component: MountainClimber,
      animated: true
    },
    {
      name: 'Pistol Squats', 
      sets: '3x5 each leg (assisted)',
      description: 'Single-leg squat with opposite leg extended. Use assistance as needed.',
      component: PistolSquat,
      animated: true
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #faf5ff, #e0e7ff)',
      padding: '1rem'
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '0.5rem'
          }}>
            🏋️‍♂️ Interactive Exercise Guide
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
            Professional exercise demonstrations with illustrated form guidance
          </p>
        </div>

        {/* Animation Controls */}
        <div style={{
          background: 'white',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              background: isPlaying ? '#EF4444' : '#10B981',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginRight: '1rem'
            }}
          >
            {isPlaying ? '⏸️ Pause Animation' : '▶️ Play Animation'}
          </button>
          <button
            onClick={() => { setCurrentPhase(0); setIsPlaying(false); }}
            style={{
              background: '#6B7280',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🔄 Reset
          </button>
        </div>

        {/* Exercise Cards */}
        {exercises.map((exercise, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '0.5rem'
              }}>
                {exercise.name}
              </h2>
              <p style={{ color: '#7C3AED', fontWeight: '600', marginBottom: '0.5rem' }}>
                {exercise.sets}
              </p>
              <p style={{ color: '#6b7280' }}>
                {exercise.description}
              </p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <exercise.component phase={currentPhase} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Form Cues:</h4>
                <ul style={{ color: '#059669', fontSize: '0.875rem', margin: 0, paddingLeft: '1rem' }}>
                  <li>Keep core engaged</li>
                  <li>Maintain controlled movement</li>
                  <li>Focus on proper alignment</li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Target Areas:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                  {['Core', 'Strength', 'Stability'].map(area => (
                    <span key={area} style={{
                      background: '#FEF3C7',
                      color: '#92400E',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* QR Code Section */}
        <div style={{
          background: 'white',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          textAlign: 'center',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            📱 Print & Digital Integration
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            QR codes connect your printed guides to these interactive demonstrations
          </p>
          <div style={{
            border: '2px dashed #7C3AED',
            borderRadius: '0.5rem',
            padding: '2rem',
            background: '#F9FAFB'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)',
              margin: '0 auto 1rem',
              border: '2px solid #000'
            }}></div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Scan to access exercise animations
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#6b7280' }}>
          <p>✅ <strong>Your interactive exercise guide is now live!</strong></p>
          <p style={{ fontSize: '0.875rem' }}>
            Professional illustrations • Interactive animations • Print integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseGuide;