import React, { useState, useEffect } from 'react'
import {ScrollView, FlatList} from 'react-native'
import { styles } from './styles'

import { Message, MessagemProps } from "../Message"
import { api } from '../../services/api'

export function MessageList(){

    const [currentMessage, setCurrentMessage] = useState<MessagemProps[]>([])

useEffect(()=>{
    async function CurrentMessage() {
        const messageResponse = await api.get('/lastmessages')
        setCurrentMessage(messageResponse.data)
    }
    CurrentMessage();
})

   return(
       <ScrollView 
       style={styles.container}
       contentContainerStyle={styles.contentContainer}
       keyboardShouldPersistTaps='never'
       >
           {currentMessage.map((message) => <Message key={message.id} data={message}/>)}
       </ScrollView>
       )
   }