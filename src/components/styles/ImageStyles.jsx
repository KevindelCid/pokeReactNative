import React from "react";
import { StyleSheet, Image, View } from "react-native";

const styles = StyleSheet.create({
  imageCard: {
    width: 150,
    height: 150,
  },
  imageProfile: {
    width: 200,
    height: 200,
  },
  ico: {
    width: 50,
    height: 50,
  },
});

export default function ImageStyles({ imageCard, imageProfile, ico, url }) {
  const stylesImage = [
    imageCard && styles.imageCard,
    imageProfile && styles.imageProfile,
    ico && styles.ico,
  ];

  return <Image style={stylesImage} source={{ uri: url }} />;
}
