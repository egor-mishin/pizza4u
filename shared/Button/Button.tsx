import React from 'react';
import { Animated, Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { token } from '../../token';

export default function Button({
	text,
	kind = 'primary',
	...props
}: PressableProps & { text: string; kind: 'primary' | 'secondary' }) {
	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [token.Colors.brightOrangeHover, token.Colors.brightOrange],
	});

	const fadeIn = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View
				style={[{ ...styles.button }, kind === 'primary' && { backgroundColor: color }]}
			>
				<Text style={styles.buttonText}>{text}</Text>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		borderRadius: token.buttonStyles.radius,
		fontWeight: '700',
		paddingBottom: token.buttonStyles.pb,
		paddingTop: token.buttonStyles.pt,
		width: token.buttonStyles.width,
	},
	buttonText: {
		fontSize: token.fontSizes.button,
	},
});
