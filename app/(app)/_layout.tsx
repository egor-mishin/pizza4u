import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import CartIcon from '../../assets/icons/Cart.icon';
import FavIcon from '../../assets/icons/Fav.icon';
import Logo from '../../assets/icons/Logo.icon';
import { useAuthStore } from '../../entities/auth/model/auth.state';
export default function AppLayout() {
	const { access_token } = useAuthStore();
	if (access_token) {
		return <Redirect href="login" />;
	}
	const insets = useSafeAreaInsets();
	<StatusBar style="dark" />;
	return (
		<SafeAreaProvider>
			<Stack
				screenOptions={{
					headerTitleAlign: 'center',
					contentStyle: {
						paddingTop: insets.top,
					},
					headerLeft: () => (
						<>
							<Logo />
						</>
					),
					headerRight: () => (
						<View style={styles.iconsBox}>
							<FavIcon />
							<CartIcon />
						</View>
					),
				}}
			>
				<Stack.Screen
					name="index"
					options={{
						title: 'Menu',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	iconsBox: {
		flexDirection: 'row',
	},
});
