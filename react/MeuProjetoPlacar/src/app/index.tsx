import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function DriveNFL() {
  // TODO 1: Crie o estado para 'nomeQB' (Começa como string vazia ou "Mahomes")
  
  // TODO 2: Crie o estado para 'linhaDeJardas' (Começa na linha de 20 jardas)

  // TODO 3: Crie o estado para 'descida' / 'down' (Começa em 1)

  // TODO 4: Crie o estado 'isTouchdown' (Começa como false)


  // TODO 5: Crie a função para mudar de descida (Aumenta +1, com trava para não passar de 4)


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏈 NFL - DRIVE DE ATAQUE</Text>

      {/* Campo de Texto para o nome do QB */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do Quarterback..."
        placeholderTextColor="#888"
        // TODO 6: Conecte o valor (value) e o onChangeText com seu estado de nomeQB
      />

      {/* Card do Placard / Drive */}
      <View style={styles.card}>
        <Text style={styles.qbTexto}>
          QB: {/* Exiba o nome do Quarterback aqui */}
        </Text>
        <Text style={styles.downTexto}>
          Descida Atual: {/* Exiba a descida (1, 2, 3 ou 4) */}ª Descida (Down)
        </Text>
        <Text style={styles.jardasTexto}>
          Posição no Campo: Linha de {/* Exiba a linhaDeJardas */} jardas
        </Text>
        
        {/* Status de Touchdown: Se isTouchdown for true, exiba "🎉 TOUCHDOWN!", senão "🏈 Luta por jardas" */}
        <Text style={styles.statusTexto}>
          Status: {/* Renderize a mensagem baseada no boolean 'isTouchdown' */}
        </Text>
      </View>

      {/* Botões de Chamada de Jogadas */}
      <View style={styles.acoes}>
        <Button 
          title="Passe Curtinho (+5 Jardas)" 
          onPress={() => {
            /* TODO 7: Soma +5 na linhaDeJardas */
          }} 
        />
        
        <View style={{ height: 10 }} />

        <Button 
          title="Passe Apimentado! 🚀 (+20 Jardas)" 
          color="#e67e22"
          onPress={() => {
            /* TODO 8: Soma +20 na linhaDeJardas */
          }} 
        />

        <View style={{ height: 10 }} />

        <Button 
          title="Próxima Descida (Avançar Down)" 
          color="#f1c40f"
          onPress={() => {
            /* TODO 9: Chame a função que aumenta a descida sem passar de 4 */
          }} 
        />

        <View style={{ height: 10 }} />

        <Button 
          title="Marcar Touchdown! 🏆" 
          color="#2ecc71"
          onPress={() => {
            /* TODO 10: Atualiza a linhaDeJardas para 100 e isTouchdown para true */
          }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1b2a', padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 20 },
  input: { backgroundColor: '#1b263b', color: '#fff', padding: 12, borderRadius: 8, fontSize: 16, marginBottom: 20 },
  card: { backgroundColor: '#1b263b', padding: 20, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#415a77' },
  qbTexto: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  downTexto: { fontSize: 18, color: '#f1c40f', marginBottom: 8 },
  jardasTexto: { fontSize: 18, color: '#e74c3c', marginBottom: 8 },
  statusTexto: { fontSize: 18, color: '#2ecc71', marginTop: 10, fontWeight: 'bold' },
  acoes: { marginTop: 10 },
});