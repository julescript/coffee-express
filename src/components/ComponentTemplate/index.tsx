import React, { FC } from "react";
import { Text, View, ViewStyle } from "react-native";
import styles from "./styles";

interface ComponentTemplateProps {
  title?: string;
  callback?: () => void;
  style?: ViewStyle;
}

const ComponentTemplate: FC<ComponentTemplateProps> = (props) => {
  // triggered on component mount only
  React.useEffect(() => {
    // for setting up initial states (calling apis)
  }, []);

  // triggered on props.title change
  React.useEffect(() => {
    // alert("changed title")
  }, [props.title]);

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
