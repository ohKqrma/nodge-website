import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CodeVerification = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.toLowerCase() === 'pump fun') {
      setSuccess(true);
      setError('');
      setTimeout(() => {
        navigate('/stage2');
      }, 1500);
    } else {
      setError('Invalid code. Try again.');
      setSuccess(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter the code..."
          className="w-full p-3 bg-black border border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full p-3 bg-purple-600 hover:bg-purple-700 transition-colors text-white"
        >
          Submit
        </button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-500 text-sm">Access granted! Redirecting...</div>}
      </form>
    </div>
  );
};