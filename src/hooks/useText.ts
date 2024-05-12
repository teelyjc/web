import { useEffect, useState } from 'react';

export function useText(messages: string[], ms: number) {
  const [text] = useState<string[]>(messages);
  const [currentText, setCurrentText] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentText >= messages.length - 1) {
        setCurrentText(0);
      } else {
        setCurrentText(currentText + 1);
      }
    }, ms);

    return () => clearInterval(interval);
  }, [currentText, messages, ms]);

  return { text: text[currentText] };
}
