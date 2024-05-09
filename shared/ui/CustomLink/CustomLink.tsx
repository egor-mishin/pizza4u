import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { token } from '../../../token';

export function CustomLink({text, ...props}: LinkProps & {text: string}){
  return (
    <Link style={styles.link} {...props}>
    <Text>{text}</Text>
    </Link>
  )
}

const styles = StyleSheet.create({
  link: {
   fontSize: token.Fonts.f18,
   color: token.Colors.darkOrange,
  }
}) 