import React, { useState, useEffect } from 'react'
import {ScrollView, FlatList} from 'react-native'
import { io }  from 'socket.io-client'
import { styles } from './styles'

import { Message, MessagemProps } from "../Message"
import { api } from '../../services/api'

let messagesQueue: MessagemProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
    messagesQueue.push(newMessage);
    console.log(newMessage);
});
 
export function MessageList(){

    const [currentMessage, setCurrentMessage] = useState<MessagemProps[]>([])

useEffect(()=>{
    async function CurrentMessage() {
        const messageResponse = await api.get('/lastmessages')
        setCurrentMessage(messageResponse.data)
    }
    CurrentMessage();
}, [])

useEffect(()=> {

}, [])

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