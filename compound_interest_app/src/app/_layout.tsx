import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const APP_BACKGROUND = '#F9FAFB'; 

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: APP_BACKGROUND,
          },
        }}
      />
    </SafeAreaProvider>
  );
}
