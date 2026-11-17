
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}
    >
      <Tabs.Screen name="index" />

      <Tabs.Screen name="estudios" />

      <Tabs.Screen name="experiencia" />

      <Tabs.Screen name="hobbies" />
    </Tabs>
  );
}
