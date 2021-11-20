import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titles: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  nameStatus: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 9,
  },
});
