import { StyleSheet, Text, View } from 'react-native';
import Button from '../shared/Button/Button';
import { token } from '../token';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello world</Text>
			<Button text='Add to cart' kind='primary' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
