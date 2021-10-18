import React, { FC } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import styles from './styles';

interface ComponentTemplateProps {
    title?: string;
    callback?: () => void;
    style?: ViewStyle;
}

const ComponentTemplate: FC<ComponentTemplateProps> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Text>{props.title}</Text>
        </View>
    );
};

ComponentTemplate.defaultProps = {
    callback: () => {},
};

export default ComponentTemplate;
