import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import ilustationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={ilustationImg} resizeMode="stretch" style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          Favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
