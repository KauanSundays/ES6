import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ShotClockNBA from './ShotClockNBA';
import DescansoAcademia from './DescansoAcademia';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Componente 1 usando useTimer(24) */}
      <ShotClockNBA />

      {/* Componente 2 usando useTimer(60) */}
      <DescansoAcademia />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f2f5' },
});