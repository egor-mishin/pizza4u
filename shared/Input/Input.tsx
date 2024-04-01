import React, { FC, useState } from 'react';
import {
	Pressable,
	StyleSheet,
	TextInput,
	TextInputProps,
	View,
} from 'react-native';
import EyeClosed from '../../assets/icons/Eye-closed';
import EyeOpened from '../../assets/icons/Eye-opened';
import { token } from '../../token';

export const Input: FC<
	TextInputProps & { kind?: 'password' | 'text'; placeholder: string }
> = ({ kind = 'text', placeholder }): JSX.Element => {
	const [isPasswordSecured, setIsPasswordSecured] = useState(false);
	return (
		<View style={styles.inputBox}>
			<TextInput
				style={styles.input}
				secureTextEntry={kind === 'password' && isPasswordSecured}
				placeholder={placeholder}
			/>
			<Pressable
				style={styles.iconBox}
				onPress={() => {
					setIsPasswordSecured(!isPasswordSecured);
				}}
			>
				{kind === 'password' ? (
					isPasswordSecured ? (
						<EyeClosed />
					) : (
						<EyeOpened />
					)
				) : null}
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
		backgroundColor: token.Colors.baseGray,
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
