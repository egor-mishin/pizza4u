import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { token } from '../../../token';

export default function FavoritesScreen() {
	
	return (
		<>
		<Stack.Screen options={{
			title: 'Favorites'
		}}/>
		<View style={styles.container}>
			<Text>Favorites</Text>
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
