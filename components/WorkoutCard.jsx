import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function WorkoutCard({ workout, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{workout.title}</Text>
      <Text style={styles.cardDescription}>{workout.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 10,
    marginRight: 12,
    width: 200,
    alignItems: 'center',
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardDescription: { fontSize: 14, color: '#777', marginTop: 8, textAlign: 'center' },
});
