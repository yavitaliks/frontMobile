import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom:36,
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom:15,
    },
    messages:{
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        lineHeight: 20,
        marginBottom: 12,
    },
    userName:{
        color: COLORS.WHITE,
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        marginLeft: 16,
    },
    dataTime:{
        color: COLORS.GRAY_PRIMARY,
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        marginLeft: 16,
    }
})