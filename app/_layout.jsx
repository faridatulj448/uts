import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <SafeAreaProvider>
      {/* Status bar untuk iOS dan Android */}
      <StatusBar style="auto" />

      {/* Tab navigation */}
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'index') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'workout') {
              iconName = focused ? 'barbell' : 'barbell-outline';
            } else if (route.name === 'progress') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato', // Warna tab aktif
          tabBarInactiveTintColor: 'gray', // Warna tab tidak aktif
          headerShown: false, // Menyembunyikan header default
        })}
      >
        {/* Tab Screens */}
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="workout" options={{ title: 'Workout' }} />
        <Tabs.Screen name="progress" options={{ title: 'Progress' }} />
        {/* Settings sudah dihapus */}
      </Tabs>
    </SafeAreaProvider>
  );
}
