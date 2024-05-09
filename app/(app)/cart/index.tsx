import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { token } from '../../../token';

export default function CartScreen() {
	
	return (
		<View style={styles.container}>
			<Text>Cart</Text>
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
