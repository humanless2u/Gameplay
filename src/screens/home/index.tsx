import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";

export function Home() {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <View style={styles.categorySelect}>
          <CategorySelect />
        </View>
      </View>
    </Background>
  );
}
