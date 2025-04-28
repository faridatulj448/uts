import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const workoutAPI = 'https://api.example.com/workout/1'; // Ganti dengan URL API yang sesuai

const programs = [
  {
    name: 'Latihan Otot',
    description: 'Meningkatkan kekuatan dan massa otot.',
    image: 'https://img.icons8.com/color/96/weightlifting.png',
  },
  {
    name: 'Kardio',
    
    description: 'Meningkatkan stamina dan membakar kalori.',
    image: 'https://img.icons8.com/color/96/running.png',
  },
  {
    name: 'Yoga',
    description: 'Meningkatkan fleksibilitas dan ketenangan.',
    image: 'https://img.icons8.com/color/96/yoga.png',
  },
 
];

export default function Home() {
  const router = useRouter();

  const handleSelectProgram = (program) => {
    router.push(`/workout?program=${program}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Program Latihan</Text>

      {programs.map((item, index) => (
        <Pressable key={index} style={styles.card} onPress={() => handleSelectProgram(item.name)}>
          
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.programName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
           
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  programName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});
