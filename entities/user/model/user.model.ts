
import { create } from 'zustand';
import { supabase } from '../../../shared/utils/supabase';
import { IUser } from './user.interface';

export interface IUserState {
	profile?: IUser | null ;
	isLoading: boolean;
	error: string | null;
	getProfile: (access_token:string | null) => void 
}


export const useUserStore = create<IUserState>((set) => ({
	profile: null ,
	isLoading: false,
	error: null,
	getProfile: async (userId: string | null) => {
		set({ isLoading: true });
					try {
						const { data: profile } = await supabase.from('profiles').select('*').eq('id', `${userId}`)
					set({ isLoading: false});
					set({
						profile: profile![0],
            isLoading: false,
            error: null,
					})
					} catch (error){
							if (error instanceof Error) {
						set({
							profile: null,
							isLoading: false,
							error: error.message,
						});
					}
					}
				}
			})
)