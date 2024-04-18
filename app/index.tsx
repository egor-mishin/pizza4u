import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IAuthState, useAuthStore } from '../entities/auth/model/auth.state';
import { token } from '../token';

export default function MenuScreen() {
	const accessToken = useAuthStore((state: IAuthState) => state.access_token);
	if (!accessToken) {
		return <Redirect href={'/login'} />;
	}
	return (
		<View style={styles.container}>
			<Text>Hello world</Text>
			<Text>text</Text>
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
