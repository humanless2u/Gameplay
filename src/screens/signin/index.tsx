import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import ilustationImg from "../../assets/illustration.png";

export function SignIn() {
  const navigation = useNavigation();

  const handleSignIn = () => {
    console.log("handleSignIn");
    navigation.navigate("Home");
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={ilustationImg}
          resizeMode="stretch"
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            Favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com o Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
