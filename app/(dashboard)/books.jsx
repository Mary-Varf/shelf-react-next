import { FlatList, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { useBooks } from "../../hooks/useBooks";
import { Colors } from "../../constants/Colors";
import ThemedCard from "../../components/ThemedCard";

const Books = () => {
  const { books } = useBooks();
  const router = useRouter();

  return (
    <ThemedView style={styles.container} isSafe={true}>
      <ThemedText isTitle={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
      <Spacer height={10} />

      <FlatList
        data={books}
        keyExtractor={(item) => {
          item.$id;
        }}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push(`/books/${item.$id}`);
            }}
          >
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText>Written by {item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    textAlign: "center",
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 0,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  list: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
