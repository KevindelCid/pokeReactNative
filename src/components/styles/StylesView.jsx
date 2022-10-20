import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "space-around",
  },
  bigGapBottom: {
    marginBottom: 80,
  },
  gapBottom: {
    marginBottom: 40,
  },
  smallGapBottom: {
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "#ccc1",
  },
  borderRad: {
    borderRadius: 0.5,
    overflow: "hidden",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  paddingCard: {
    padding: 50,
  },
});

export default function StylesView({
  row,
  alignCenter,
  justifyCenter,
  children,
  bigGapBottom,
  gapBottom,
  smallGapBottom,
  shadow,
  borderRad,
  alignSelfCenter,
  paddingCard,
}) {
  const stylesView = [
    row && styles.row,
    alignCenter && styles.alignCenter,
    justifyCenter && styles.justifyCenter,
    bigGapBottom && styles.bigGapBottom,
    gapBottom && styles.gapBottom,
    smallGapBottom && styles.smallGapBottom,
    shadow && styles.shadow,
    borderRad && styles.borderRad,
    alignSelfCenter && styles.alignSelfCenter,
    paddingCard && styles.paddingCard,
  ];

  return <View style={stylesView}>{children}</View>;
}
