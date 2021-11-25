import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = "https://via.placeholder.com/300/09f/fff.png";
  return <Image style={styles.image} source={{ uri }} resizeMode="cover" />;
}
