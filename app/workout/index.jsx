import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

export default function WorkoutScreen() {
  const router = useRouter(); // Inisialisasi router

  const workouts = [
    { id: '1', name: 'Squats' },
    { id: '2', name: 'Push-ups' },
    { id: '3', name: 'Lunges' },
    { id: '4', name: 'Plank' },
    { id: '5', name: 'Burpees' },
    { id: '6', name: 'Mountain Climbers' },
  ];

  const handlePress = (id) => {
    router.push(`/workout/${id}`); // Navigasi ke halaman workout detail
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item.id)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Latihan</Text>

      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  list: { paddingBottom: 20 },
  item: {
    backgroundColor: '#e0f7fa',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  itemText: { fontSize: 20, color: '#00796b', fontWeight: '600' },
});
