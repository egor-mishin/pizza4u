import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { ReactNode } from 'react';

export interface MenuItemProps {
	drawer: DrawerContentComponentProps;
	icon: ReactNode;
	text: string;
	path: string;
}
