import { StyleSheet } from 'react-native';
import { colors } from '../../constants/palette';

export default StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },

        icon: {
            marginBottom: 20,
            color: colors.border_lines,
        },

        loader: {
            color: colors.border_lines,
        },

        title: {
            width: '100%',
            paddingHorizontal: 45,
            fontSize: 22,
            marginBottom: 12,
            textAlign: 'center',
            fontWeight: 'bold',
            color: colors.primary_dark,
        },

        description: {
            width: '100%',
            paddingHorizontal: 45,
            fontSize: 16,
            lineHeight: 22,
            textAlign: 'center',
            color: colors.text,
        },

        button1: {
            marginTop: 35,
            paddingHorizontal: 40,
            minWidth: '45%',
            marginBottom: 20,
            marginHorizontal: 15,
            color: colors.primary_dark,
        },

        button2: {
            backgroundColor: 'transparent',
            marginHorizontal: 15,
            shadowOpacity: 0,
            elevation: 0,
        },

        buttonText1: {
            color: 'white',
        },

        buttonText2: {
            color: colors.primary,
            textShadowColor: 'rgba(0, 0, 0, 0.2)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        },
    });
