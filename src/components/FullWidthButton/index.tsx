import React, { FC } from 'react';
import { View, Text, ActivityIndicator, ViewStyle } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../constants/palette';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FullWidthButtonProps {
    title?: string;
    loadingLabel?: string;
    enabled?: boolean;
    reverse?: boolean;
    loading?: boolean;
    style?: ViewStyle;
    icon?: string;
    buttonStyle?: object | Array<object>;
    textStyle?: object | Array<object>;
    callback?: () => void;
    preserveCase?: boolean;
}

const FullWidthButton: FC<FullWidthButtonProps> = (props) => {

    let label = props.loading ? props.loadingLabel : props.title;

    return (
        <View style={props.style}>
                <TouchableOpacity
                    disabled={!props.enabled || props.loading}
                    onPress={props.callback}
                    testID="full-width-button"
                    containerStyle={[
                        styles.fullWidthButton,
                        props.reverse && styles.reversedButton,
                        !props.enabled && styles.disabledButton,
                        props.loading && styles.disabledButton,
                        props.buttonStyle,
                    ]}>
                    {props.loading && (
                        <ActivityIndicator
                            color={
                                props.reverse
                                    ? styles.indicatorReversed.color
                                    : styles.indicator.color
                            }
                            size="small"
                        />
                    )}
                    {!!props.title && (
                        <Text
                            numberOfLines={1}
                            style={[
                                styles.fullWidthButtonText,
                                props.reverse && styles.reversedButtonText,
                                props.textStyle,
                                {
                                    marginLeft: props.loading ? 10 : 0,
                                },
                            ]}
                        >
                            {label}
                        </Text>
                    )}
                    {!!props.icon && (
                        <Icon
                            name={props.icon}
                            color={props.reverse ? colors.black : colors.white}
                            size={24}
                            style={{}}
                        />
                    )}
                </TouchableOpacity>
        </View>
    );
};

FullWidthButton.defaultProps = {
    callback: () => {},
    loading: false,
    preserveCase: false,
};

export default FullWidthButton;
