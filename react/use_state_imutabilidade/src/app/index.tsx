import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function CarrinhoIngressos() {
  const [resumo, setResumo] = useState({
    torcedor: "seu nome",
    totalIngressos: 0
  });

  const [ingressos, setIngresso] = useState([
    { id: '1', jogo: 'Eagles vs Cowboys', preco: 150, confirmado: false },
    { id: '2', jogo: 'Eagles vs Cowboys', preco: 250, confirmado: false }
  ]);

  const adicionarIngresso = () => {
    setIngresso(ingressos => ([
      ...ingressos,
      {
        id: Date.now().toString(),
        jogo: "Lakers vs Celtics",
        preco: 200,
        confirmado: false
      }
    ]))
  }
  
  const removerIngresso = (id: string) => {
    setIngresso(ingressos.filter(item => item.id !== id))
  } 

  const alternarConfirmacao = (id: string) => {
    console.log(id)
    setIngresso(setIngressos => 
      setIngressos.map(item => {
        if (item.id === id) {
          return { ...item, confirmado: !item.confirmado };
        } else {
          return item;
        }
      })
    )
  }

  const atualizarTorcedor = () => {
    setResumo(resumoAnterior => ({
      ...resumoAnterior,
      torcedor: "Ricardo"
    })
    )
  }

  return (
    <View style={styles.container}>
      <Text>Nome do torcedor: {resumo.torcedor}</Text>
      <Text>Numero total de ingressos: {resumo.totalIngressos}</Text>

      <View>
        <FlatList
        data={ingressos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.playerText}>
            {item.jogo} - <Text style={styles.posText}>{item.confirmado === true ? "Confirmado" : "Pendente" } - Valor: {item.preco}</Text>
            <Button title='Alterar Status' onPress={() => alternarConfirmacao(item.id)}></Button>
          </Text>
        )}
        />
      </View>
      <Button title='Atualizar nome' onPress={atualizarTorcedor}></Button>
    </View>
  )
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