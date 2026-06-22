import { StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const Books = () => {
  return (
    <ThemedView style={styles.container} isSafe={true}>
      <ThemedText isTitle={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
      <Spacer />
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
});
