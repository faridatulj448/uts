// ProgramDetailScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Timer from '../components/Timer';

export default function ProgramDetailScreen() {
  const router = useRouter();
  const { title, image, description } = useLocalSearchParams();
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const startTimer = () => {
    setIsTimerVisible(true);
  };

  const handleTimerComplete = () => {
    alert('Latihan selesai!');
    setIsTimerVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description || 'Deskripsi tidak tersedia.'}</Text>

      <Pressable style={styles.button} onPress={startTimer}>
        <Text style={styles.buttonText}>Mulai Timer</Text>
      </Pressable>

      {isTimerVisible && <Timer duration={60} onTimerComplete={handleTimerComplete} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
