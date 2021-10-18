import React, { FC, useMemo } from 'react';
import { Text, ViewStyle, ActivityIndicator, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import FullWidthButton from '../FullWidthButton';

interface EmptyStateProps {
    title?: string;
    description?: string;
    icon?: string;
    loading?: boolean;
    actionButton?: {
        callback?: () => void;
        title?: string;
    };
    secondaryButton?: {
        callback?: () => void;
        title?: string;
    };
    style?: ViewStyle;
}

const EmptyState: FC<EmptyStateProps> = (props) => {
    const shouldShow = useMemo(() => {
        return (
            props.title ||
            props.description ||
            props.actionButton?.title ||
            props.secondaryButton?.title ||
            props.icon
        );
    }, [
        props.title,
        props.description,
        props.actionButton,
        props.secondaryButton,
        props.icon,
    ]);

    return shouldShow ? (
        <View
            style={[styles.container, props.style]}
        >
            {!props.loading && props.icon && (
                <Icon
                    name={props.icon}
                    color={styles.icon.color}
                    size={130}
                    style={styles.icon}
                />
            )}
            {props.loading && (
                <ActivityIndicator
                    color={styles.loader.color}
                    size="large"
                    style={{ marginBottom: 35 }}
                />
            )}
            {props.title && (
                <Text
                    numberOfLines={2}
                    adjustsFontSizeToFit
                    minimumFontScale={0.7}
                    maxFontSizeMultiplier={1.5}
                    style={styles.title}
                >
                    {props.title}
                </Text>
            )}
            {props.description && (
                <Text
                    numberOfLines={4}
                    adjustsFontSizeToFit
                    minimumFontScale={0.7}
                    maxFontSizeMultiplier={1.5}
                    style={styles.description}
                >
                    {props.description}
                </Text>
            )}
            {!props.loading && props.actionButton?.title && (
                <FullWidthButton
                    title={props.actionButton.title}
                    enabled={true}
                    callback={props.actionButton.callback}
                    buttonStyle={styles.button1}
                    textStyle={styles.buttonText1}
                />
            )}
            {!props.loading && props.secondaryButton?.title && (
                <FullWidthButton
                    title={props.secondaryButton.title}
                    enabled={true}
                    callback={props.secondaryButton.callback}
                    buttonStyle={styles.button2}
                    textStyle={styles.buttonText2}
                    reverse
                />
            )}
        </View>
    ) : null;
};

EmptyState.defaultProps = {
    loading: false,
};

export default EmptyState;
