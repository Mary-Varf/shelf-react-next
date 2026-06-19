import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import LogoImg from "../assets/imgs/logo.png";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />
      <Text style={[styles.title, { color: "purple" }]}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <Link href="/about" style={styles.link}>
        Go to About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Go to Contact Page
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
    marginVertical: 10,
    borderBottomWidth: 2,
  },
});
