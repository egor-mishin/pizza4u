import { Link } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../shared/Button/Button';
import { token } from '../token';

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<Text>Hello world</Text>
			<Button text="Sign in" kind="primary" />
			<TextInput placeholder='Enter your name'/>
			<Link href={'/restore'}>
				<Text>Restore the password</Text>
			</Link>
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
