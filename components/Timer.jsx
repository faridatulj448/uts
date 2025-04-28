import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Timer({ duration, onTimerComplete }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerComplete();
      return;
    }
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{timeLeft} detik</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 10,
  },
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
