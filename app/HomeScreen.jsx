// screens/HomeScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router'; // Untuk navigasi
import Timer from '../components/Timer'; // Komponen Timer

export default function HomeScreen() {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const router = useRouter();

  const startTimer = () => {
    setIsTimerVisible(true);
  };

  const handleTimerComplete = () => {
    alert('Waktu Latihan Selesai!');
    router.push('/progress'); // Arahkan ke halaman progress setelah timer selesai
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latihan Fitness</Text>

      {/* Tombol untuk Memulai Timer */}
      <Pressable style={styles.button} onPress={startTimer}>
        <Text style={styles.buttonText}>Mulai Latihan</Text>
      </Pressable>

      {/* Menampilkan Timer */}
      {isTimerVisible && <Timer duration={60} onTimerComplete={handleTimerComplete} />}
      
      {/* Tombol untuk pindah ke halaman latihan lainnya */}
      <Pressable style={styles.button} onPress={() => router.push('/workout')}>
        <Text style={styles.buttonText}>Lihat Latihan Lainnya</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
