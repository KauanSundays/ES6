import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { usePlacar } from './usePlacar';

export default function JogoLakers() {
  
  const { pontos, faltas, cestaDeDois, cestaDeTres, cometerFalta, zerarPlacar } = usePlacar();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Los Angeles Lakers</Text>
      
      <View style={styles.painel}>
        <Text style={styles.placar}>Pontos: {pontos}</Text> 
        <Text style={styles.faltas}>Faltas: {faltas}</Text>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={cestaDeDois}>
          <Text style={styles.textoBotao}>+2 Pontos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={cestaDeTres}>
          <Text style={styles.textoBotao}>+3 Pontos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoFalta]} onPress={cometerFalta}>
          <Text style={styles.textoBotao}>Falta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoZerar} onPress={zerarPlacar}>
        <Text style={styles.textoBotao}>Zerar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FDB927' },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#552583', marginBottom: 20 },
  painel: { backgroundColor: '#552583', padding: 30, borderRadius: 10, width: '80%', alignItems: 'center', marginBottom: 30 },
  placar: { fontSize: 40, color: '#FFF', fontWeight: 'bold' },
  faltas: { fontSize: 24, color: '#FDB927', marginTop: 10 },
  botoesContainer: { flexDirection: 'row', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 30 },
  botao: { backgroundColor: '#552583', padding: 15, borderRadius: 8, width: 110, alignItems: 'center' },
  botaoFalta: { backgroundColor: '#D9534F' },
  botaoZerar: { backgroundColor: '#333', padding: 15, borderRadius: 8, width: '80%', alignItems: 'center' },
  textoBotao: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});