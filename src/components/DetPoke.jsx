import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import ImageStyles from "./styles/ImageStyles";
import StylesView from "./styles/StylesView";
import TextStyle from "./styles/TextStyle";

const DetPoke = ({ url }) => {
  const [poke, setPoke] = useState({});

  useEffect(() => {
    getPokeData(url);
  }, []);

  const getPokeData = (url) => {
    axios.get(url).then((res) => setPoke(res.data));
  };

  console.log(poke);

  return (
    <StylesView alignSelfCenter paddingCard gapBottom shadow borderRad>
      <TouchableOpacity onPress={() => Alert.alert(`hola ${poke.name}`)}>
        {/* para que todos los pokes se alineen al centro y tengan un espacio de separacion abajo */}
        <TextStyle big bold>
          {poke.name}
        </TextStyle>

        <ImageStyles imageCard url={poke.sprites?.front_default} />

        <StylesView row justifyCenter>
          <StylesView alignCenter>
            <TextStyle small bold padding>
              Weight
            </TextStyle>
            <TextStyle normalSize>{poke.weight}</TextStyle>
          </StylesView>

          <StylesView alignCenter>
            <TextStyle small bold padding>
              Height
            </TextStyle>
            <TextStyle normalSize>{poke.height}</TextStyle>
          </StylesView>
        </StylesView>
      </TouchableOpacity>
    </StylesView>
  );
};

export default DetPoke;
