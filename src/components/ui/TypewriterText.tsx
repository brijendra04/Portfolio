import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setText(current => current.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        }
      } else {
        setText(currentPhrase.slice(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="text-orange-500">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}