import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";

import { styles } from "./styles";
import { theme } from "../../global/theme";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentsCreate() {
  const members = [
    {
      id: 1,
      username: "Jhon Doe",
      avatarUrl: "https://randomuser.me/api/portraits",
      status: "online",
    },
    {
      id: 2,
      username: "Irineu",
      avatarUrl: "https://randomuser.me/api/portraits",
      status: "offline",
    },
    {
      id: 3,
      username: "Poze do rodo",
      avatarUrl: "https://randomuser.me/api/portraits",
      status: "online",
    },
  ];
  return (
    <Background>
      <Header
        title="Criar Partida"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
