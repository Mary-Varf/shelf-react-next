import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import LogoImg from "../assets/imgs/logo.png";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />
      <Spacer height={20} />
      <ThemedText isTitle={true} style={styles.title}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Themed Some text </ThemedText>
      <Spacer />
      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
      <Link href="/create" style={styles.link}>
        <ThemedText>Create Page</ThemedText>
      </Link>
      <Link href="/books" style={styles.link}>
        <ThemedText>Books Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  logo: {
    height: 40,
    width: 40,
    marginBottom: 20,
  },
  link: {
    marginVertical: 5,
    borderBottomWidth: 2,
  },
});
