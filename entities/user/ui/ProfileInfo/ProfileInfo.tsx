import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import {
	launchCameraAsync,
	launchImageLibraryAsync,
	MediaTypeOptions,
	PermissionStatus,
	useCameraPermissions,
	useMediaLibraryPermissions,
} from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import Avatar from '../../../../assets/icons/Avatar.icon';
import MenuItem from '../../../../features/layout/ui/CloseDrawer/MenuItem/MenuItem';
import Button from '../../../../shared/ui/Button/Button';
import { MENU } from '../../../../shared/utils/menu';
import { token } from '../../../../token';
import { useUserStore } from '../../model/user.model';

export default function ProfileInfo({ drawer }: { drawer: DrawerContentComponentProps }) {
	const profile = useUserStore((state) => state.profile);
	const [imageUrl, setImageUrl] = useState<string>('');
	const [cameraPermissions, requestCameraPermissions] = useCameraPermissions();
	const [mediaPermissions, requestMediaPermissions] = useMediaLibraryPermissions();

	const verifyCameraPermissions = async () => {
		if (cameraPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await requestCameraPermissions();
			return res.granted;
		}

		if (cameraPermissions?.status === PermissionStatus.DENIED) {
			Alert.alert('You do not have enough permissions to access to the camera.');
			return false;
		}

		return true;
	};

	const verifyMediaPermissions = async () => {
		if (mediaPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await requestMediaPermissions();
			return res.granted;
		}

		if (mediaPermissions?.status === PermissionStatus.DENIED) {
			Alert.alert('You do not have enough permissions to access to media library.');
			return false;
		}

		return true;
	};

	const pickAvatarFromCamera = async () => {
		const isPermissionsGranted = await verifyCameraPermissions();
		if (!isPermissionsGranted) {
			return;
		}
		const result = await launchCameraAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});
		if (!result.assets) {
			return;
		}

		setImageUrl(result?.assets[0].uri);
	};

	const pickAvatarFromLibrary = async () => {
		const isPermissionsGranted = await verifyMediaPermissions();
		if (!isPermissionsGranted) {
			return;
		}
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});
		if (!result.assets) {
			return;
		}

		setImageUrl(result?.assets[0].uri);
	};
	return (
		<View style={styles.profile}>
			<View style={styles.avatar}>
				{profile?.avatar_url || imageUrl ? (
					<Image source={{ uri: imageUrl }} resizeMode="cover" style={styles.image} />
				) : (
					<Avatar />
				)}
				<Button text="Choice image from Camera" kind="primary" onPress={pickAvatarFromCamera} />

				<Button
					text="Choice image from Media Library"
					kind="primary"
					onPress={pickAvatarFromLibrary}
				/>
				<View style={styles.nameTitle}>
					<Text style={styles.nameTitleText}>{profile?.full_name}</Text>
				</View>
			</View>
			<View style={styles.menu}>
				{MENU.map((item) => (
					<MenuItem key={item.path} drawer={drawer} {...item} />
				))}
			</View>
			<View style={styles.item}>
				<Text style={styles.title}>Email:</Text>
				<Text style={styles.text}>{profile?.email}</Text>
			</View>

			<View style={styles.item}>
				<Text style={styles.title}>Phone:</Text>
				<Text style={styles.text}>{profile?.phone}</Text>
			</View>
			<View style={styles.item}>
				<Text style={styles.title}>Address:</Text>
				<Text style={styles.text}>{profile?.address}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	profile: {
		flex: 1,
		marginTop: 60,
	},

	avatar: {
		alignItems: 'center',
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
	},
	menu: {
		marginVertical: 30,
	},
	item: {
		width: '100%',
		marginBottom: 30,
		paddingLeft: 30,
	},
	title: {
		fontSize: token.Fonts.f20,
		fontWeight: '700',
	},
	nameTitle: {
		paddingVertical: 30,
	},
	nameTitleText: {
		fontSize: token.Fonts.f22,
		fontWeight: '700',
	},
	text: {
		color: token.Colors.baseGray,
		fontSize: token.Fonts.f20,
	},
});
