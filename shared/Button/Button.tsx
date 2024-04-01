import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useCallback } from 'react';
import { Animated, Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { token } from '../../token';

export default function Button({
	text,
	kind='primary',
	...props
}: PressableProps & { text: string; kind: 'primary' | 'secondary' }) {
	const [fontsLoaded, fontError] = useFonts({
		'Sora-Bold': require("../../assets/fonts/Sora-Bold.ttf"),
	});
    const animatedValue = new Animated.Value(100);
		const color = animatedValue.interpolate({
			inputRange: [0, 100],
      outputRange: [token.Colors.brightOrangeHover, token.Colors.brightOrange],
		});

		const fadeIn = () => {
			Animated.timing(animatedValue, {
				toValue: 0,
				duration: 100,
				useNativeDriver: true
			}).start();
		}

		const fadeOut = () => {
			Animated.timing(animatedValue, {
				toValue: 100,
				duration: 100,
				useNativeDriver: true
			}).start();
		}
		
	const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }	
	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View style={[{...styles.button}
				, kind === 'primary' && {backgroundColor: color}]}>
				<Text style={styles.buttonText}>{text}</Text>
			</Animated.View>
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
		fontFamily: 'Sora-Bold' /* connected in prebuild  */,
	},
	primary: { backgroundColor: token.Colors.brightOrange },
});
