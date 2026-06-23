import { StyleSheet, Text } from "react-native";
import { useUser } from "../../hooks/useUser";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const { logout, user } = useUser();

  return (
    <ThemedView style={styles.container}>
      <ThemedText isTitle={true} style={styles.heading}>
        Your Email: {user && user.email}
      </ThemedText>
      <Spacer />

      <ThemedText>Time to start reading books...</ThemedText>
      <Spacer />

      <ThemedButton onPress={logout}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ThemedButton>

      <Spacer />

      <Link href="/" style={styles.link}>
        <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
});
