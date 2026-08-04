import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function GerenciadorTime() {
  // Estado 1: Objeto do Time
  const [statusTime, setStatusTime] = useState({
    nome: "Real Madrid",
    vitorias: 10,
    derrotas: 2
  });

  // Estado 2: Array de Titulares
  const [titulares, setTitulares] = useState([
    { id: '1', nome: 'Vinicius Jr', posicao: 'Atacante' },
    { id: '2', nome: 'Jude Bellingham', posicao: 'Meio-Campo' },
    { id: '3', nome: 'Rodrygo', posicao: 'Atacante' }
  ]);

  // REQUISITO 1: Atualize o statusTime adicionando +1 vitória sem mutar o objeto antigo.
  const handleAdicionarVitoria = () => {
    setStatusTime(prevStatusTime => ({
      ...prevStatusTime,
      vitorias: prevStatusTime.vitorias + 1
    }))
  };

  // REQUISITO 2: Adicione um novo jogador ({ id: '4', nome: 'Endrick', posicao: 'Atacante' }) 
  // ao array de titulares sem mutar o array antigo.
  const handleContratarEndrick = () => {
    setTitulares(prevTitulares => [
      ...prevTitulares,
      {
        id: Date.now().toString(),
        nome: "Endrick",
        posicao: "Atacante"
      }
    ]
    );
  };

  // REQUISITO 3: Atualize a posição do jogador de id '1' (Vinicius Jr) para 'Ponta Esquerda',
  // utilizando o método .map() e o operador spread para manter imutável.
  const handleMudarPosicaoVini = () => {
    setTitulares(prevTitulares => 
      prevTitulares.map(item => {
        if (item.id === "1") {
          return {...item, posicao: "Ponta Esquerda"};
        } else {
          return item;
        }
      })
    )
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{statusTime.nome}</Text>
      <Text style={styles.subtitle}>
        Vitórias: {statusTime.vitorias} | Derrotas: {statusTime.derrotas}
      </Text>

      <Button title="Registrar Vitória" onPress={handleAdicionarVitoria} />

      <Text style={styles.sectionHeader}>Elenco Titular:</Text>
      <FlatList
        data={titulares}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.playerText}>
            {item.nome} - <Text style={styles.posText}>{item.posicao}</Text>
          </Text>
        )}
      />

      <View style={styles.buttonGroup}>
        <Button title="Contratar Endrick" onPress={handleContratarEndrick} />
        <Button title="Mudar Posição do Vini Jr" onPress={handleMudarPosicaoVini} color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 15 },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  playerText: { fontSize: 16, marginVertical: 4 },
  posText: { color: '#007AFF', fontWeight: '600' },
  buttonGroup: { gap: 10, marginTop: 15 }
});