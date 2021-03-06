import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: theme.colors.secondary50,
  },
  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 15,
  },
});
