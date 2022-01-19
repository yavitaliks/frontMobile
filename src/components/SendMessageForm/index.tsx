import React, {useState} from 'react'
import {Alert, Keyboard, TextInput, View,} from 'react-native'
import { api } from '../../services/api'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SendMessage(){

    const [message, setMessage] = useState('');
    const [sendMessage, setSendMessage] = useState(false);

    async function SendMessage() {
        const messageFormatted = message.trim();
   

        if(messageFormatted.length > 0){
            setSendMessage(true)
            await api.post('/messages',{message: messageFormatted});
            setMessage('');
            Keyboard.dismiss()
            Alert.alert("Messagem enviada com sucesso")
            setSendMessage(false)
        }else{
            Alert.alert("Escreva a mensagem");
        }
        
    }

   return(
       <View style={styles.container}>

           <TextInput 
           keyboardAppearance='dark'
           placeholder='Digite sua mensagem'
           placeholderTextColor={COLORS.GRAY_PRIMARY}
           multiline
           maxLength={300}
           style={styles.input}
           onChangeText={setMessage}
           value={message}
           editable={!sendMessage}
           />

           <Button title='ENVIAR MENSAGEM'
           backgroundColor={COLORS.PINK}
           color={COLORS.WHITE}
           isLoading={sendMessage}
           onPress={SendMessage}
           />
        
       </View>
       )
   }