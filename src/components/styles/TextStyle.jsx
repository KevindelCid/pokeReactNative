import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  big: {
    fontSize: 24,
  },
  normalSize: {
    fontSize: 18,
  },
  small: {
    fontSize: 12,
  },
  padding: {
    padding: 10,
  },
});

export default function TextStyle({
  bold,
  big,
  padding,
  normalSize,
  small,
  children,
}) {
  const styleText = [
    bold && styles.bold,
    big && styles.big,
    normalSize && styles.normalSize,
    small && styles.small,
    padding && styles.padding,
  ];

  return <Text style={styleText}>{children}</Text>;
}
