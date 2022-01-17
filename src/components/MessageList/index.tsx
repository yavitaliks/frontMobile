import React from 'react'
import {ScrollView} from 'react-native'
import { styles } from './styles'

import { Message } from "../Message"


const message = {
    id: '1',
    text: "Tarararara",
    create_at: '2021-01-02',
    user: {
        avatarUrl: "",
        name: "Vitaliy Sukhovetskiy",
    }
}

export function MessageList(){
   return(
       <ScrollView 
       style={styles.container}
       contentContainerStyle={styles.contentContainer}
       keyboardShouldPersistTaps='never'
       >
           <Message data={message}/>
           <Message data={message}/>
           <Message data={message}/>
           <Message data={message}/>
       </ScrollView>
       )
   }