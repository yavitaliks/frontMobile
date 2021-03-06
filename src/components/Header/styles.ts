import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems:'center'
    },
    logoutButton:{
        flexDirection: 'row',
        alignItems:'center',
    },
    logutText: {
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        marginRight: 20
    }
})