import React from "react";
import { FlatList, View, Text } from "react-native";
import { pokemons } from "../data/pokemons";
import DetPoke from "./DetPoke";

const Main = () => {
  return (
    <View>
      <FlatList
        data={pokemons}
        renderItem={({ item: poke }) => <DetPoke url={poke.url} />}
      ></FlatList>
      {/* <Text>hola</Text> */}
    </View>
  );
};

export default Main;
