import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import CloseIcon from '../../../../assets/icons/Close.icon';

export default function closeDrawer ({navigation} : DrawerContentComponentProps) {
  return (
    <>
    <Pressable onPress={navigation.closeDrawer}>
      <View style={styles.close}>
      <CloseIcon />
      </View>
    </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  close: {
    width: 30,
    height: 30, 
    position: 'absolute',
    top: 0,
    right: 20,
  }
})