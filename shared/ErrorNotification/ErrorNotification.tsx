import { FC, useEffect, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text } from "react-native";
import { token } from "../../token";
import { ErrorNotificationProps } from "./ErrorNotification.props";

export const ErrorNotification: FC<ErrorNotificationProps> = ({
  error,
}): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const opacity = new Animated.Value(100);

  Animated.timing(opacity, {
    toValue: 0,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  useEffect(() => {
    if (error) {
      setIsShown(true);
      const timer = setTimeout(() => {
        setIsShown(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  if (isShown) {
    return (
      <Animated.View style={[styles.error, { opacity: opacity }]}>
        <Text style={styles.errorText}>{error}</Text>
      </Animated.View>
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  error: {
    position: "absolute",
    top: 50,
    justifyContent: "center",
    padding: 15,
    width: Dimensions.get("screen").width,
    backgroundColor: token.Colors.baseRed,
  },
  errorText: {
    color: token.Colors.baseWhite,
    fontSize: token.fontSizes.error,
    textAlign: "center",
  },
});
