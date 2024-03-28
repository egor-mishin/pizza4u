import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { token } from '../../token';

export default function Button({
	text,
	kind,
	...props
}: PressableProps & { text: string; kind: 'primary' | 'secondary' }) {
	return (
		<Pressable {...props}>
			<View style={[styles.button, kind === 'primary' && styles.primary]}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		width: token.buttonStyles.width,
		paddingTop: token.buttonStyles.pt,
		paddingBottom: token.buttonStyles.pb,
		alignItems: 'center',
		borderRadius: token.buttonStyles.radius,
		fontWeight: '700',
	},
	buttonText: {
		fontSize: token.fontSizes.button,
		fontFamily: 'Sora-Bold' /* Fonts connect in prebuild */,
	},
	primary: { backgroundColor: token.Colors.brightOrange },
});
