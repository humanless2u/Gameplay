import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointments } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";

export function Home() {
  const [category, setCategory] = useState(0);

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "Ranqueada",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "Invictors",
        icon: null,
        owner: false,
      },
      category: "Duelo 1x1",
      date: "22/06 às 20:40h",
      description: "É hoje que o couro vai comer",
    },
  ];

  function handleCategorySelect(categoryId: number) {
    categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  const navigation = useNavigation();

  function handleAppointmentsDetails() {
    navigation.navigate("AppointmentsDetails");
  }
  function handleAppointmentsCreate() {
    navigation.navigate("AppointmentsCreate");
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentsCreate} />
        </View>

        <View style={styles.categorySelect}>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>

        <View style={styles.content}>
          <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointments data={item} onPress={handleAppointmentsDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
      </View>
    </Background>
  );
}
