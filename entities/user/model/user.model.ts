import { create } from 'zustand';
import { IUser } from './user.interface';

export interface IUserState {
	profile: IUser | null;
	isLoading: boolean;
	error: string | null;
}

export const useUserStore = create<IUserState>(() => ({
	profile: {
		id: 0,
		login: '',
		password: '',
	},
	isLoading: false,
	error: null,
}));
