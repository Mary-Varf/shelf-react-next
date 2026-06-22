import { StyleSheet, useColorScheme, View, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

const ThemedView = ({ style, isSafe = false, ...props }) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!isSafe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
