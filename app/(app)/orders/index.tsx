import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { token } from '../../../token';

export default function OrdersScreen() {
	return (
		<>
			<Stack.Screen
				options={{
					title: 'My orders',
				}}
			/>
			<View style={styles.container}>
				<Text>My Orders</Text>
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
