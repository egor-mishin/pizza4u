import React, { useState } from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { token } from '../../../../../token';
import { MenuItemProps } from './MenuItem.props';

export default function MenuItem({
	drawer,
	icon,
	text,
	path,
	...props
}: MenuItemProps & PressableProps) {
	const isActive = drawer.state.routes[drawer.state.index].name === path;
	const [clicked, setClicked] = useState<boolean>(false);
	return (
		<Pressable
			{...props}
			onPress={() => drawer.navigation.navigate(path)}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
		>
			<View
				style={{
					...styles.item,
					backgroundColor:
						clicked || isActive ? token.Colors.brightOrange : token.Colors.baseBronze,
				}}
			>
				{icon}
				<Text style={styles.text}>{text}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		textAlign: 'left',
		padding: 20,
	},

	text: {
		fontSize: 16,
		fontWeight: '700',
	},
});
