import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import CartIcon from '../../assets/icons/Cart.icon';
import FavIcon from '../../assets/icons/Fav.icon';
import Logo from '../../assets/icons/Logo.icon';

export default function AppLayout() {

	<StatusBar style="dark" />;
	const insets = useSafeAreaInsets();
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{
				headerTitleAlign: 'center',
				headerLeft: () => (
				<>
					<Logo />
				</>
				),
				headerRight: () => (
					<View style={styles.iconsBox}>
						<FavIcon/>
						<CartIcon/>
					</View>
				)
			}}>
				<Stack.Screen
					name="index"
					options={{
						title:'Menu',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}


const styles = StyleSheet.create({	
	iconsBox: {
   flexDirection: 'row',
  },
	logoBox: {
		
	 }
})
