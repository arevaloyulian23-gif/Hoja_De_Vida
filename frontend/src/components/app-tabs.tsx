
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#7E22CE',
        tabBarInactiveTintColor: '#6B7280',

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E5E7EB',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? '#7E22CE' : '#6B7280'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="estudios"
        options={{
          title: 'Estudios',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="school-outline"
              size={size}
              color={focused ? '#7E22CE' : '#6B7280'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiencia',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="briefcase-outline"
              size={size}
              color={focused ? '#7E22CE' : '#6B7280'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="hobbies"
        options={{
          title: 'Hobbies',
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="game-controller-outline"
              size={size}
              color={focused ? '#7E22CE' : '#6B7280'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
