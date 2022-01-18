import React from 'react'
import {View} from 'react-native'
import {useAuth} from '../../hooks/auth'
import { COLORS } from '../../theme'
import { Button } from '../Button'
import { styles } from './styles'

export function SingInBox(){

    const {singIn, isSigningIn} = useAuth();

   return(
       <View style={styles.container}>
           <Button
                color={COLORS.BLACK_PRIMARY}
                title='ENTRAR COM O GITHUB'
                backgroundColor={COLORS.YELLOW}
                onPress={singIn}
                isLoading={isSigningIn}
                icon='github'
           />
       </View>
       )
   }