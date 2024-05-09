import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Avatar from '../../../../assets/icons/Avatar.icon';
import { token } from '../../../../token';
import { useUserStore } from '../../model/user.model';

export default function ProfileInfo () {
  const profile = useUserStore((state)=> state.profile);
  return (
    <View style={styles.profile}>
       {profile?.avatar_url ? <Image
					source={require('../../../../assets/images/avatar.jpg')}
					resizeMode="cover"
          style={styles.image}
				/> : <Avatar />}
        <View style={styles.nameTitle}>
          <Text style={styles.nameTitleText}>{profile?.full_name}</Text>
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
  )
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  item:{
    width: '100%',
    marginBottom: 30,
    paddingLeft: 30,

  }, 
  title:{
    fontSize: token.Fonts.f20,
    fontWeight: "700",
  },
  nameTitle: {
    padding: 30
        
    
  },
  nameTitleText: {
    fontSize: token.Fonts.f22,
    fontWeight: "700",
  

  },
  text: {
    color: token.Colors.baseGray,
    fontSize: token.Fonts.f20
  }
})