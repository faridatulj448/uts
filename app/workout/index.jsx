import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Latihan</Text>
      {/* Di sini bisa ditambahkan daftar latihan lebih detail */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
});
