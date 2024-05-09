import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useAuthStore } from '../entities/auth/model/auth.state';
import Button from '../shared/ui/Button/Button';
import { ErrorNotification } from '../shared/ui/ErrorNotification/ErrorNotification';
import { Input } from '../shared/ui/Input/Input';
import { token } from '../token';

export default function LoginScreen() {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const {login, isLoading, access_token, error} = useAuthStore(state => state)
	
	useEffect(()=>{
		if(access_token) {
			router.replace('/')
		}
	})
	
	const submit = () => {
		if(!email || !password) {
			return
		}
		login({email, password})
	}

	
	return (
		<>
			<View style={styles.container}>
				<ErrorNotification error={error || undefined} />
				<Image
					source={require('../assets/images/chef.png')}
					style={styles.image}
					resizeMode="contain"
				/>
				<View>
					<Input placeholder="Email" onChangeText={setEmail}/>
					<Input kind={'password'} placeholder="Password" onChangeText={setPassword}/>
					<Button text="Sign in" kind="primary" onPress={submit} isLoading={isLoading}/>
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
