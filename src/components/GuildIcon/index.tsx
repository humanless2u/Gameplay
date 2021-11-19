import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = "https://i.imgur.com/dZ5yRtb.png";
  return <Image style={styles.image} source={{ uri }} resizeMode="cover" />;
}
