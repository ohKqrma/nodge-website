import React, { useState, useEffect } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { CodeVerification } from './CodeVerification';

const NodgeWebsite = () => {
  // Set target date 7 days from now
  const targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const countdown = useCountdown(targetDate);

  const GlitchText = ({ children, intensity = 'medium' }) => {
    const [glitchText, setGlitchText] = useState(children);
    
    useEffect(() => {
      const glitchInterval = setInterval(() => {
        if (Math.random() > 0.8) {
          const text = children.toString();
          const glitchChar = '!@#$%^&*'[Math.floor(Math.random() * 8)];
          const position = Math.floor(Math.random() * text.length);
          const newText = 
            text.substring(0, position) + 
            glitchChar + 
            text.substring(position + 1);
          setGlitchText(newText);
          
          setTimeout(() => setGlitchText(children), 100);
        }
      }, 2000);
      
      return () => clearInterval(glitchInterval);
    }, [children]);
    
    return (
      <span className={`glitch-text glitch-${intensity} font-mono`}>
        {glitchText}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex space-x-6 justify-center">
            <li><a href="#stage1" className="hover:text-purple-400 transition-colors">Stage 1</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
            <li><a href="#community" className="hover:text-purple-400 transition-colors">Community</a></li>
            <li><a href="#tokenomics" className="hover:text-purple-400 transition-colors">Tokenomics</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center">
        <GlitchText intensity="high">
          <h1 className="text-6xl font-bold mb-8">NODGE</h1>
        </GlitchText>
        <div className="text-2xl font-mono animate-pulse">
          <GlitchText>{countdown}</GlitchText>
        </div>
      </div>

      {/* Stage 1 */}
      <section id="stage1" className="min-h-screen flex items-center justify-center bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
            <p className="mb-6 font-mono leading-relaxed">
              Piece by piece, the mysteries of crypto reveal themselves.<br/>
              Understanding each layer requires focus and patience.<br/>
              Many will skim through without realizing what's hidden.<br/>
              Pay close attention, as even the smallest detail matters.<br/>
              Find the answer by looking within, not around you.<br/>
              Unlocking secrets takes more than just reading; it takes intuition.<br/>
              Notice how each line builds on the last, guiding you to the truth.
            </p>
            <CodeVerification />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <GlitchText intensity="low">
              <h2 className="text-4xl mb-8 text-center">About NODGE</h2>
            </GlitchText>
            <div className="space-y-6 font-mono">
              <p>
                In the depths of the internet, shrouded in layers of code and mystery, 
                lies NODGE, a concept born from questions rather than answers. It's more 
                than just a project; it's a riddle that speaks to those who know without 
                knowing, to the curious minds drawn to the unknown.
              </p>
              <p>
                NODGE isn't here to deliver promises or provide directions. Instead, 
                it exists as a paradox—elusive, shifting, and hidden in plain sight. 
                Every interaction, every click, every page holds a clue, waiting for 
                those willing to see beyond the obvious.
              </p>
              <p>
                Do you dare to uncover the unknown?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h2 className="text-4xl mb-8">Community</h2>
            <div className="space-x-4">
              <a href="#" className="inline-block px-6 py-3 border border-purple-500 hover:bg-purple-500/20 transition-colors">
                Twitter
              </a>
              <a href="#" className="inline-block px-6 py-3 border border-purple-500 hover:bg-purple-500/20 transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
            <h2 className="text-4xl mb-8 text-center">Tokenomics</h2>
            <div className="space-y-6">
              <p className="font-mono">
                NODGE is launching on PumpFun.com because it offers a secure, 
                transparent, and community-centered platform that aligns with our values.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Fair Launch: Equal opportunity for all participants</li>
                <li>Liquidity Burn: Permanent lock of liquidity</li>
                <li>Renounced Contract: Full community control</li>
                <li>No Transaction Tax: Maximum value for holders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NodgeWebsite;