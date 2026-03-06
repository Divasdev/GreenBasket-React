import { Link } from 'react-router-dom';
import useCountdown from '../../hooks/useCountdown';

const LAUNCH_DATE = '2025-12-31T00:00:00Z';

function ComingSoon() {
   const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

   return (
      <main style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1rem' }}>
         <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: '#1f7a45', marginBottom: '0.5rem' }}>Coming Soon</h1>
         <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px' }}>
            We're working hard to bring this page to you. Stay tuned!
         </p>

         {/* Countdown */}
         <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[{ label: 'Days', value: days }, { label: 'Hours', value: hours }, { label: 'Minutes', value: minutes }, { label: 'Seconds', value: seconds }].map(({ label, value }) => (
               <div key={label} style={{ background: '#f0faf5', border: '2px solid #1f7a45', borderRadius: '12px', padding: '1rem 1.5rem', minWidth: '80px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1f7a45' }}>{String(value).padStart(2, '0')}</div>
                  <div style={{ fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '2px' }}>{label}</div>
               </div>
            ))}
         </div>

         <Link to="/" className="hero-shopnow-btn">← Back to Home</Link>
      </main>
   );
}

export default ComingSoon;
