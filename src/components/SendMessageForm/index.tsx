import React, {useState} from 'react'
import {TextInput, View,} from 'react-native'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SendMessage(){

    const [message, setMessage] = useState("");
    const [sendMessage, setSendMessage] = useState(false);

    console.log(message)

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
           />
        
       </View>
       )
   }