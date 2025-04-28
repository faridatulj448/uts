// screens/ProgressScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kemajuan Latihan</Text>
      <Text style={styles.description}>Ini adalah halaman untuk melihat kemajuan latihan Anda.</Text>
      <Text style={styles.progress}>Latihan 1: Selesai</Text>
      <Text style={styles.progress}>Latihan 2: Selesai</Text>
      <Text style={styles.progress}>Latihan 3: Dalam Proses</Text>
      {/* Bisa menambahkan data kemajuan di sini, seperti persentase, waktu, dll */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  progress: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 10,
  },
});
