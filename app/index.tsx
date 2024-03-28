import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../shared/Button/Button';
import { token } from '../token';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello world</Text>
			<Button text="Add to cart" kind="primary" />
			<Link href={'/restor'}>
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
