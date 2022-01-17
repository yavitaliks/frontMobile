import React from 'react'
import {
    TouchableOpacityProps, 
    TouchableOpacity, 
    Text, ColorValue, 
    ActivityIndicator} 
    from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'
import { COLORS } from '../../theme'

type Props = TouchableOpacityProps & {
    color: ColorValue,
    title: string,
    backgroundColor: ColorValue,
    icon?: React.ComponentProps<typeof AntDesign>['name'],
    isLoading?: boolean, 
}


export function Button({color, title, backgroundColor, icon, isLoading = false, ...rest}: Props){
   return(
           <TouchableOpacity 
                style={[styles.button, {backgroundColor}]}
                activeOpacity={0.4}
                disabled={isLoading}
                {...rest}
            >
                {isLoading ? <ActivityIndicator color={color} /> :
                <>
                <AntDesign name={icon} color={COLORS.BLACK_PRIMARY} size={24} style={styles.icon}/>
                 <Text style={[styles.textButton, {color}]}>
                {title}
                </Text>
                </>
                }
           </TouchableOpacity>
       )
   }