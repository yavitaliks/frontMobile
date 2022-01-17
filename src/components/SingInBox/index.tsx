import React from 'react'
import {View,} from 'react-native'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SingInBox(){
   return(
       <View style={styles.container}>
           <Button
                color={COLORS.BLACK_PRIMARY}
                title='ENTRAR COM O GITHUB'
                backgroundColor={COLORS.YELLOW}
                onPress={()=>{console.log("SingIn")}}
                icon='github'
           />
       </View>
       )
   }