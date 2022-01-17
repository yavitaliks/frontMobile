import { StyleSheet } from 'react-native'
import { FONTS } from '../../theme'

export const styles = StyleSheet.create({
    textButton:{
        fontSize: 14,
        fontFamily: FONTS.BOLD
    },
    button:{
        height: 48,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    icon:{
        marginRight:12,
    }
})