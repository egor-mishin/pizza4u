import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useUserStore } from '../entities/user/model/user.model';
import Button from '../shared/ui/Button/Button';
import { ErrorNotification } from '../shared/ui/ErrorNotification/ErrorNotification';
import { Input } from '../shared/ui/Input/Input';
import { token } from '../token';

export default function LoginScreen() {
	const user = useUserStore((state) => state.profile);
	return (
		<>
			<View style={styles.container}>
				<Text>{user?.login}</Text>
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
