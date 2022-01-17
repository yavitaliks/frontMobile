import React from 'react'
import {View,Text} from 'react-native'
import { UserPhoto } from '../UserPhoto'
import { MotiView} from "moti"
import { styles } from './styles'


export type MessagemProps ={
    id: string,
    text: string,
    create_at: string,
    user: {
        avatarUrl: string,
        name: string,
    }
}

type Props ={
    data: MessagemProps;
}

export function Message({data}: Props){
   return(
       <MotiView 
       from={{opacity: 0, translateY: -50}}
       animate={{opacity: 1, translateY: 0}}
       transition={{type: 'timing', duration: 700}}
       style={styles.container}
       >

           <Text style={styles.messages}>
               {data.text}
            </Text>

           <View style={styles.footer}>
               <UserPhoto sizes="SMALL"
               imageUri={data.user.avatarUrl}
               />

               <Text style={styles.userName}>
                   {data.user.name}
               </Text>
           </View>

       </MotiView>
       )
   }