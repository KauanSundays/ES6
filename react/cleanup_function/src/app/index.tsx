import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function PlayClockNFL({ jogadaId }: { jogadaId: number }) {
  const [tempo, setTempo] = useState(40);

  useEffect(() => {
    setTempo(40);
    console.log(`🏈 [Jogada #${jogadaId}] Iniciando Play Clock de 40s...`);

    const timerId = setInterval(() => {
      setTempo((prev) => {
        if (prev <= 1) {
          console.log(`🚨 [Jogada #${jogadaId}] FALTA! Atraso de jogo!`);
          return 0;
        }
        console.log(`⏱️ [Jogada #${jogadaId}] Tempo restante: ${prev - 1}s`);
        return prev - 1;
      });
    }, 1000);

    return () => {
      console.log("Timer desligado")
      clearTimeout(timerId)
    }

  }, [jogadaId]);

  return (
    <View style={styles.clockCard}>
      <Text style={styles.playText}>JOGADA ATUAL #{jogadaId}</Text>
      <Text style={styles.timerText}>{tempo}</Text>
    </View>
  );
}

export default function App() {
  const [jogadaId, setJogadaId] = useState(1);
  const [noCampo, setNoCampo] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Philadelphia Eagles - Play Clock</Text>

      <View style={styles.buttonGroup}>
        <Button
          title="Mudar Jogada / Reset"
          onPress={() => setJogadaId((prev) => prev + 1)}
        />
        <Button
          title={noCampo ? "Pedir Tempo (Esconder)" : "Voltar ao Campo (Mostrar)"}
          color="#d9534f"
          onPress={() => setNoCampo(!noCampo)}
        />
      </View>

      {noCampo && <PlayClockNFL jogadaId={jogadaId} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#004C54', padding: 20 },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  buttonGroup: { gap: 10, marginBottom: 20, width: '100%' },
  clockCard: { backgroundColor: '#111', padding: 30, borderRadius: 12, alignItems: 'center', minWidth: 220 },
  playText: { color: '#A5ACAF', fontSize: 14, fontWeight: 'bold' },
  timerText: { color: '#4CBB17', fontSize: 72, fontWeight: 'bold' },
});