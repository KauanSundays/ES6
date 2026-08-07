import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface BannerGolProps {
  contadorGols: number;
}

function BannerGol({ contadorGols }: BannerGolProps) {
  const [exibir, setExibir] = useState(false);

  useEffect(() => {
    if (contadorGols === 0) return;

    setExibir(true);
    console.log(`⏱️ [Gol #${contadorGols}] Timer de 3 segundos INICIADO.`);

    const timerId = setTimeout(() => {
      console.log(`⏰ [Gol #${contadorGols}] 3s se passaram. Escondendo banner.`);
      setExibir(false);
    }, 3000);

    // CLEANUP FUNCTION
    return () => {
      console.log(`🧹 [CLEANUP] Gol #${contadorGols} teve seu timer CANCELADO pelo novo clique!`);
      clearTimeout(timerId);
    };
  }, [contadorGols]);

  if (!exibir) return null;

  return (
    <View style={styles.banner}>
      <Text style={styles.textoGol}>⚽ GOOOOOOL! (#{contadorGols})</Text>
    </View>
  );
}

export default function App() {
  const [gols, setGols] = useState(0);

  return (
    <View style={styles.container}>
      <Button title="Marcar Gol ⚽" onPress={() => setGols((prev) => prev + 1)} />
      <BannerGol contadorGols={gols} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  banner: { backgroundColor: 'green', padding: 15, borderRadius: 8 },
  textoGol: { color: 'white', fontWeight: 'bold', fontSize: 20 },
});