import { Stack, Tabs } from "expo-router";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserOnly>
      <Tabs
        screenOptions={{
          headerShown: false,
          animation: "none",
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90,
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
                name={focused ? "person" : "person-outline"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
                name={focused ? "book" : "book-outline"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
                name={focused ? "create" : "create-outline"}
              />
            ),
          }}
        />
      </Tabs>
    </UserOnly>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
