import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { Input } from '../shared/Input/Input';
import { token } from '../token';

export default function LoginScreen() {
	return (
		<>
			<View style={styles.container}>
				<ErrorNotification error="Incorrect password" />
				<Image
					source={require('../assets/images/chef.png')}
					style={styles.image}
					resizeMode="contain"
				/>
				<View>
					<Input placeholder="Login" />
					<Input kind={'password'} placeholder="Password" />
					<Button text="Sign in" kind="primary" />
					<Link href={'/restore'} style={styles.linkText}>
						<Text>Restore the password</Text>
					</Link>
				</View>
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
	image: {},
	linkText: {
		textAlign: 'center',
		marginTop: 20,
		fontSize: token.fontSizes.linkRestore,
	},
});
