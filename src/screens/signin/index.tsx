import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import ilustationImg from "../../assets/illustration.png";
import { StatusBar } from "expo-status-bar";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn(){
  return (
    <View style={styles.container}>

      <StatusBar
      style="light"
      />

      <Image source={ilustationImg} resizeMode="stretch" style={styles.image} />

      <View style={styles.content}>

        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          Favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7}/>

      </View>

    </View>
  );
}