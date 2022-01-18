import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from './styles';
import { UserPhoto } from '../UserPhoto';

import LogoSvg from "../../assets/logo.svg";

const USER_STORAGE = '@nlwheat:user';

type UserInfo = {
    avatar_url: string,
    nome: string,
    id: string
}
export function Header(){

    const [userUri, setUserUri] = useState('')

    async function GetUserInfo() {
        const avatar_url = await AsyncStorage.getItem(USER_STORAGE)
        console.log(avatar_url)
    }
    

   return(
       <View style={styles.container}>
           <LogoSvg />
          
          <View style={styles.logoutButton}>
           <TouchableOpacity 
           onPress={GetUserInfo}>
                <Text style={styles.logutText}>Sair</Text>
           </TouchableOpacity>

           <UserPhoto imageUri='https://github.com/yavitaliks.png'/>
           </View>
       </View>
       )
   }