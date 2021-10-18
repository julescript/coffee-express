import React from 'react';
import { StyleSheet } from 'react-native';
import { colors, shadows } from '../../constants/palette';

export default StyleSheet.create({
        fullWidthButton: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            paddingVertical: 10,
            backgroundColor: colors.primary,
            elevation: shadows.md.y,
            shadowColor: shadows.md.color,
            shadowOpacity: shadows.md.opacity,
            shadowOffset: { width: shadows.md.x, height: shadows.md.y },
            paddingHorizontal: 12,
            height: 48
        },

        fullWidthButtonText: {
            fontSize: 16,
            fontWeight: '500',
            color: colors.white,
        },

        reversedButton: {
            backgroundColor:
                colors.white,
            color: colors.black,
        },

        reversedButtonText: {
            color: colors.black,
        },

        disabledButton: {
            opacity: 0.66,
        },

        indicator: {
            color: colors.white,
        },

        indicatorReversed: {
            color: colors.black,
        }
    });
