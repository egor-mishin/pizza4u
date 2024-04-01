import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


export default function RootLayout() {
	<StatusBar style="dark" />;
	const insets = useSafeAreaInsets();
	return (
		<SafeAreaProvider>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: {
						paddingTop: insets.top,
					},
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen
					name="restore"
					options={{
						title: 'Restore the password',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}
