import { Pressable, PressableProps, Text, View } from 'react-native';

export default function Button({text, ...props}: PressableProps & {text: string}) {
	return (
		<Pressable>
			<View>
				<Text>{text}</Text>
			</View>
		</Pressable>
	);
}
