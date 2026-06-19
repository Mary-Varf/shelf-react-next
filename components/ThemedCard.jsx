import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedCard = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, style.card]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({});

const style = StyleSheet({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
