import { Link, Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import CartIcon from '../../assets/icons/Cart.icon';
import FavIcon from '../../assets/icons/Fav.icon';
import Logo from '../../assets/icons/Logo.icon';
import ProfileIcon from '../../assets/icons/Profile.icon';
import { useAuthStore } from '../../entities/auth/model/auth.state';
import { CustomDrawer } from '../../entities/layout/ui/CustomDrawer/CustomDrawer';
import { useUserStore } from '../../entities/user/model/user.model';
import { token } from '../../token';

export default function RootLayout() {
	const { access_token, userId } = useAuthStore((state)=> state);
	const getProfile = useUserStore((state)=> state.getProfile);
	
	<StatusBar style="light" />;
	
	useEffect(()=>{
		getProfile(userId)
	}, [])
	
	if (!access_token) {
		return <Redirect href="login" />;
	}
	const insets = useSafeAreaInsets();
	return (
		<SafeAreaProvider>
			<Drawer
			drawerContent={(props)=> (
				<CustomDrawer {...props} />
			)}  
			screenOptions={({navigation})=> ({
				headerLeft: () => (
					<>
						<Logo />
					</>
				),
				headerRight: () => (
					<View style={styles.iconsBox}>
						<Pressable onPress={()=> navigation.toggleDrawer()}>
						<ProfileIcon />
						</Pressable>
						<Pressable>
						<Link href={'/favorites'}>
							<FavIcon />
						</Link>
					</Pressable>
						<Pressable>
						<Link href={'/cart'}>
							<CartIcon />
						</Link>
						</Pressable>
					</View>
				),
				drawerContentContainerStyle: {
					backgroundColor: token.Colors.baseGray
				},
				headerLeftContainerStyle: {
					paddingTop: insets.top,
					marginLeft: 20,
				},
				headerRightContainerStyle: {
					paddingTop: insets.top,
					paddingRight: 10,
				},
				headerTitleStyle: {
					paddingTop: insets.top,
				},
				headerTitleAlign: 'center',
				drawerContentStyle:{
					backgroundColor: token.Colors.baseGray
				} 			
			}
						
			)}>
				<Drawer.Screen name="index" options={{
					drawerLabel: "Menu",
					title: "Menu",
					
				}} />
				</Drawer>
			
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	iconsBox: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
