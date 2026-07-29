import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function BatMovel() {
  const [combustivel, setCombustivel] = useState(100);
  const acelerar = () => {
    if (combustivel > 0) {
      setCombustivel(combustivel - 10);
    }
  }

  const abastecer = () => {
    setCombustivel(100);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Painel do Batmovel</Text>
      <Text style={styles.fuelText}>{combustivel}% Combustivel</Text>

      <View style={styles.buttonGroup}>
        <Button onPress={acelerar} title='Acelerar'>
        </Button>
        <Button color="green" onPress={abastecer} title='Abastecer'>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  fuelText: { fontSize: 32, color: '#f1c40f', marginBottom: 30 },
  buttonGroup: { width: '80%' },
});