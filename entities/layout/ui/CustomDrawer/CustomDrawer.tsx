import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Redirect } from 'expo-router';
import React, { FC, useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import CloseDrawer from '../../../../features/layout/ui/CloseDrawer/CloseDrawer';
import { CustomLink } from '../../../../shared/ui/CustomLink/CustomLink';
import { token } from '../../../../token';
import { IAuthState, useAuthStore } from '../../../auth/model/auth.state';
import { IUserState, useUserStore } from '../../../user/model/user.model';
import ProfileInfo from '../../../user/ui/ProfileInfo/ProfileInfo';

export  const CustomDrawer: FC<DrawerContentComponentProps>  = (props) => {
  const {logout, access_token} = useAuthStore((state: IAuthState) => state);
  const {profile} = useUserStore((state: IUserState) => state);
	  
  if (!access_token) {
		return <Redirect href={'/login'} />;
	}
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
      <CloseDrawer {...props}/>
      <ProfileInfo />
      <Pressable onPress={logout}>
      <CustomLink text="Sign out" href={'/login'}/>
      </Pressable>
      
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
   paddingTop: 60,
   backgroundColor: token.Colors.baseBronze
  }

})