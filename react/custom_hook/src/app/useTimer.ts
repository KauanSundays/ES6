import { useState, useEffect } from 'react';

export function useTimer(tempoInicial: number = 0) {
  const [tempo, setTempo] = useState(tempoInicial);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (!ativo) return;

    const timerId = setInterval(() => {
      setTempo((prev) => {
        if (prev <= 1) {
          setAtivo(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // Cleanup!
  }, [ativo]);

  const iniciar = () => setAtivo(true);
  const pausar = () => setAtivo(false);
  const resetar = () => {
    setAtivo(false);
    setTempo(tempoInicial);
  };

  return { tempo, ativo, iniciar, pausar, resetar };
}