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
      <Link href="/about" style={styles.link}>
        <ThemedText>Go to About Page</ThemedText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemedText>Go to Contact Page</ThemedText>
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
