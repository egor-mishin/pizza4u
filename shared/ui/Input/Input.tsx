import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import EyeClosed from '../../../assets/icons/Eye-closed.icon';
import EyeOpened from '../../../assets/icons/Eye-opened.icon';
import { token } from '../../../token';

export const Input: FC<TextInputProps & { kind?: 'password' | 'text'; placeholder: string }> = ({
	kind = 'text',
	placeholder,
	...props
}): JSX.Element => {
	const [isPasswordSecured, setIsPasswordSecured] = useState(true);
	return (
		<View style={styles.inputBox}>
			<TextInput
				style={styles.input}
				secureTextEntry={kind === "password" && isPasswordSecured}
				placeholder={placeholder}
				{...props}
			/>
			<Pressable
				style={styles.iconBox}
				onPress={() => {
					setIsPasswordSecured(!isPasswordSecured);
				}}
			>
				{kind === 'password' ? isPasswordSecured ? <EyeClosed /> : <EyeOpened /> : null}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		width: token.inputStyles.w,
		borderWidth: token.inputStyles.borderWidth,
		borderColor: token.Colors.borderGray,
		borderRadius: token.inputStyles.radius,
		paddingHorizontal: token.inputStyles.horizontalPadding,
		paddingVertical: token.inputStyles.verticalPadding,
		backgroundColor: token.Colors.lightGray,
		fontSize: token.fontSizes.input,
	},

	inputBox: {
		marginBottom: 35,
	},

	iconBox: {
		position: 'absolute',
		top: 15,
		right: 25,
		flexDirection: 'row',
	},
});
