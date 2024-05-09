import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { token } from '../../token';
import { Redirect } from 'expo-router';
import { IAuthState, useAuthStore } from '../../entities/auth/model/auth.state';
import Button from '../../shared/ui/Button/Button';

export default function MenuScreen() {
	const {logout, access_token} = useAuthStore((state: IAuthState) => state);
	if (!access_token) {
		return <Redirect href={'/login'} />;
	}
	return (
		<View style={styles.container}>
			<Button text='Sig out' kind={'primary'} onPress={logout}/>
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
