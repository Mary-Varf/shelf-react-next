import { Stack } from "expo-router";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const { user } = useUser();

  return (
    <GuestOnly>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </GuestOnly>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
