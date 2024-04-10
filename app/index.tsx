import { router, useRootNavigationState } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthStore } from '../entities/auth/model/auth.state';
import { token } from '../token';

export default function MenuScreen() {
	const { access_token } = useAuthStore();
	const state = useRootNavigationState();

	useEffect(() => {
		if (!state.key) return;
		if (!access_token) {
			router.replace('/login');
		}
	}, [access_token, state]);

	return (
		<View style={styles.container}>
			<Text>Hello world</Text>
			<Text>{access_token}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: token.Colors.baseWhite,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
