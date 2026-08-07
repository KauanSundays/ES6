import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTimer } from './useTimer'; // 👈 Reutilizando O MESMO hook

export default function DescansoAcademia() {
  // Passamos 60 segundos de tempo inicial para o mesmo hook
  const { tempo, ativo, iniciar, pausar, resetar } = useTimer(60);

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>🏋️ DESCANSO DE SÉRIE (SUPINO)</Text>
      <Text style={styles.relogio}>{tempo}s</Text>
      <Text style={styles.status}>
        {ativo ? '💪 Recuperando o fôlego...' : '🏋️ Hora de preparar o peso!'}
      </Text>

      <View style={styles.botoes}>
        <Button title="Iniciar Descanso" onPress={iniciar} color="#2e7d32" />
        <Button title="Pausar" onPress={pausar} color="#f57c00" />
        <Button title="Reset 60s" onPress={resetar} color="#555" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#1e293b', padding: 20, borderRadius: 12, alignItems: 'center', marginVertical: 10 },
  titulo: { color: '#38bdf8', fontSize: 16, fontWeight: 'bold' },
  relogio: { color: '#4ade80', fontSize: 52, fontWeight: 'bold', marginVertical: 10 },
  status: { color: '#94a3b8', fontSize: 12, marginBottom: 15 },
  botoes: { flexDirection: 'row', gap: 8 }
});