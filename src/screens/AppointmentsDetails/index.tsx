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

export function AppointmentsDetails() {
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
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendarios</Text>
          <Text style={styles.subtitle}>É hoje que o coro come</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
