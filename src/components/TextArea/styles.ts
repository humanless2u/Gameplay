import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    fontSize: 13,
    marginRight: 4,
    textAlign: "center",
    borderRadius: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    backgroundColor: theme.colors.secondary40,
  },
});
