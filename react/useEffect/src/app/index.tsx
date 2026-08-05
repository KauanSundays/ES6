import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EstatisticasJogador() {
  const [touchdowns, setTouchdowns] = useState(0);
  const [jardas, setJardas] = useState(0);

  // Executa uma vez ao montar a tela
  useEffect(() => {
    console.log("Partida começou! go Eagles");
  }, []);

  // Executa toda vez que 'touchdowns' muda
  useEffect(() => {
    if (touchdowns > 0) {
      console.log("TOUCHDOWN EAGLES");
    }
  }, [touchdowns]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Touchdowns: {touchdowns}</Text>
      <Text style={styles.texto}>Jardas Passadas: {jardas}</Text>

      <View style={styles.botoes}>
        <Button 
          title="+1 Touchdown" 
          onPress={() => setTouchdowns(touchdowns + 1)} 
        />
        <Button 
          title="+10 Jardas" 
          onPress={() => setJardas(jardas + 10)} 
          color="green"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  texto: { fontSize: 20, marginBottom: 10 },
  botoes: { gap: 10, marginTop: 20 }
});
