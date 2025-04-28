import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ProgressBarAndroid, Platform, ProgressViewIOS, Pressable } from 'react-native';

export default function ProgressScreen() {
  const initialProgressData = [
    { id: '1', name: 'Squats', progress: 1 },
    { id: '2', name: 'Push-ups', progress: 1 },
    { id: '3', name: 'Lunges', progress: 0.5 },
    { id: '4', name: 'Plank', progress: 0.3 },
    { id: '5', name: 'Burpees', progress: 0 },
    { id: '6', name: 'Mountain Climbers', progress: 0 },
  ];

  const [progressData, setProgressData] = useState(initialProgressData);

  const resetProgress = () => {
    const resetData = progressData.map(item => ({
      ...item,
      progress: 0,
    }));
    setProgressData(resetData);
  };

  const renderProgressBar = (progress) => {
    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
          color="#4CAF50"
          style={{ flex: 1, height: 10, borderRadius: 5 }}
        />
      );
    } else {
      return (
        <ProgressViewIOS
          progress={progress}
          progressTintColor="#4CAF50"
          trackTintColor="#e0e0e0"
          style={{ flex: 1, height: 10, borderRadius: 5 }}
        />
      );
    }
  };

  const renderItem = ({ item }) => {
    const percentage = Math.round(item.progress * 100);

    return (
      <View style={styles.item}>
        <Text style={styles.exerciseName}>{item.name}</Text>

        <View style={styles.progressRow}>
          {renderProgressBar(item.progress)}
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>

        <Text style={styles.status}>
          {item.progress === 1 ? 'Selesai' : item.progress > 0 ? 'Dalam Proses' : 'Belum Mulai'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kemajuan Latihan</Text>

      {/* Tombol Reset */}
      <Pressable style={styles.resetButton} onPress={resetProgress}>
        <Text style={styles.resetButtonText}>Reset Progress</Text>
      </Pressable>

      <FlatList
        data={progressData}
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
    backgroundColor: '#f1f8e9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  exerciseName: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  percentageText: { width: 40, textAlign: 'right', fontSize: 16, fontWeight: '500', color: '#333' },
  status: { marginTop: 8, fontSize: 16, fontStyle: 'italic', color: '#555' },
  resetButton: {
    backgroundColor: '#FF5252',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
