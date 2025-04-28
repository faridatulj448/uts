import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function WorkoutDetail() {
  const { id } = useLocalSearchParams(); // Ambil ID dari URL

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Latihan: {id}</Text>
      {/* Bisa nanti tampilkan nama latihan berdasarkan ID */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold' },
});
