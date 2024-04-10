import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { supabase } from '../../../shared/utils/superbase';
import { ILoginRequest } from './login.interface';

export interface IAuthState {
	access_token: string | null;
	isLoading: boolean;
	error: string | null;
	login: ({ email, password }: ILoginRequest) => void;
	logout: () => void;
}
export const useAuthStore = create<IAuthState>()(
	persist(
		(set) => ({
			access_token: null,
			isLoading: false,
			error: null,
			login: async ({ email, password }) => {
				set({ isLoading: true });
				try {
					const { data } = await supabase.auth.signInWithPassword({
						email,
						password,
					});
					set({
						isLoading: false,
						access_token: data.session?.access_token,
					});
				} catch (error) {
					if (error instanceof Error) {
						set({
							isLoading: false,
							error: error.message,
						});
					}
				}
			},
			logout: async () => {
				set({ isLoading: true });
				try {
					await supabase.auth.signOut();
					set({
						isLoading: false,
						access_token: null,
					});
				} catch (error) {
					if (error instanceof Error) {
						set({
							isLoading: false,
							error: error.message,
						});
					}
				}
			},
		}),

		{
			name: 'auth-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
