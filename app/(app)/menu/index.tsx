import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { token } from '../../../token';
import { Stack } from 'expo-router';

export default function MenuScreen() {
	return (
		<>
			<Stack.Screen
				options={{
					title: 'Menu',
				}}
			/>
			<View style={styles.container}>
				<Text>Menu</Text>
			</View>
		</>
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
