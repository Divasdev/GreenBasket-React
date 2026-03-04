import { useState } from 'react';

/**
 * useNewsletter – handles newsletter subscription form logic.
 *
 * Usage:
 *   const { email, setEmail, status, handleSubscribe } = useNewsletter();
 */
function useNewsletter() {
   const [email, setEmail] = useState('');
   const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

   const handleSubscribe = async (e) => {
      e.preventDefault();
      setStatus('loading');
      try {
         // TODO: Replace with your real API call
         await new Promise((res) => setTimeout(res, 800));
         setStatus('success');
         setEmail('');
      } catch {
         setStatus('error');
      }
   };

   return { email, setEmail, status, handleSubscribe };
}

export default useNewsletter;
