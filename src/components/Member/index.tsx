import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/theme";
import { Avatar } from "../Avatar";

export type MemberProps = {
  username: string;
  avatar_url: String;
  status: string;
};
type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const isOnline = data.status === "online";
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.titles}>{data.username}</Text>

        <View style={styles.status}>
          <Text style={styles.nameStatus}>
            {isOnline ? "Disponivel" : "Ocupado"}
          </Text>

          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? on : primary },
            ]}
          ></View>
        </View>
      </View>
    </View>
  );
}
