import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function StartWorkoutScreen() {
  const router = useRouter();

  const workouts = [
    { id: '1', name: 'Squats', duration: 30 },
    { id: '2', name: 'Push-ups', duration: 30 },
    { id: '3', name: 'Lunges', duration: 30 },
    { id: '4', name: 'Plank', duration: 30 },
    { id: '5', name: 'Burpees', duration: 30 },
    { id: '6', name: 'Mountain Climbers', duration: 30 },
  ];

  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(workouts[0].duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      if (currentWorkoutIndex < workouts.length - 1) {
        setCurrentWorkoutIndex(currentWorkoutIndex + 1);
        setTimeLeft(workouts[currentWorkoutIndex + 1].duration);
      } else {
        setIsRunning(false);
        alert('Latihan selesai!');
        router.push('/progress'); // Setelah selesai, kembali ke progress
      }
    }

    return () => clearTimeout(timer);
  }, [isRunning, timeLeft, currentWorkoutIndex]);

  const startWorkout = () => {
    setIsRunning(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sesi Latihan</Text>

      <Text style={styles.workoutName}>
        {workouts[currentWorkoutIndex].name}
      </Text>

      <Text style={styles.timer}>{timeLeft}s</Text>

      {!isRunning && (
        <Pressable style={styles.button} onPress={startWorkout}>
          <Text style={styles.buttonText}>Mulai Latihan</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  workoutName: { fontSize: 24, fontWeight: '600', marginBottom: 10 },
  timer: { fontSize: 48, fontWeight: 'bold', marginVertical: 20, color: '#4CAF50' },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
