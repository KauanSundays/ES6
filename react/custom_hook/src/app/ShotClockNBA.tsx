import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTimer } from './useTimer'; // 👈 Reutilizando o hook

export default function ShotClockNBA() {
  // Passamos 24 segundos de tempo inicial para o hook
  const { tempo, ativo, iniciar, pausar, resetar } = useTimer(24);

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>🏀 NBA - SHOT CLOCK</Text>
      <Text style={styles.relogio}>{tempo}s</Text>
      <Text style={styles.status}>
        {ativo ? '⚡ Posse de Bola em Andamento' : '⏸️ Cronômetro Parado'}
      </Text>

      <View style={styles.botoes}>
        <Button title="Iniciar" onPress={iniciar} color="#1d428a" />
        <Button title="Pausar" onPress={pausar} color="#c8102e" />
        <Button title="Reset 24s" onPress={resetar} color="#555" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#111', padding: 20, borderRadius: 12, alignItems: 'center', marginVertical: 10 },
  titulo: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  relogio: { color: '#c8102e', fontSize: 52, fontWeight: 'bold', marginVertical: 10 },
  status: { color: '#aaa', fontSize: 12, marginBottom: 15 },
  botoes: { flexDirection: 'row', gap: 8 }
});