import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IUser } from '../user/model/user.interface';

export interface IAuthState {
	access_token: string | null;
	isLoading: boolean;
	error: string | null;
	user: IUser | null;
	setUser: (user: IUser) => void;
}
export const useAuthStore = create<IAuthState>()(
	persist(
		(set) => ({
			access_token: null,
			isLoading: false,
			error: null,
			user: null,
			setUser: (user: IUser) => set({ user: user }),
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
