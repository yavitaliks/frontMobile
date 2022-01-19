import React, { useState, useEffect } from 'react'
import {ScrollView, FlatList} from 'react-native'
import { io } from 'socket.io-client'
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
    const timer = setInterval(() => {
        if(messagesQueue.length > 0){
            setCurrentMessage(prevState =>[messagesQueue[0], prevState[1], prevState[2],prevState[3], prevState[4], prevState[5], prevState[6], prevState[7], prevState[7],prevState[9]]);
            messagesQueue.shift();
        }
    }, 3000);
    return() => clearInterval(timer)
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