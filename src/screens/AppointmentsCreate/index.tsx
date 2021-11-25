import React, { useState } from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/theme";

export function AppointmentsCreate() {
  const [category, setCategory] = useState(0);
  return (
    <Background>
      <Header title="Agendar Partida" />

      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 38, marginBottom: 18 },
        ]}
      >
        Categoria
      </Text>

      <View>
        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />
      </View>

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <View style={styles.image} />
              <GuildIcon />
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}> Selecione um sevidor</Text>
            </View>
            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
}
