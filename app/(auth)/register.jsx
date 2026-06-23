import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/Colors";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { register } = useUser();

  const handleSubmit = async () => {
    setError(null);
    try {
      await register(email, password);
    } catch (er) {
      setError(er?.message);
      console.log(er);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText isTitle={true} style={styles.title}>
          Register
        </ThemedText>

        <ThemedTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20 }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href="/login">
          <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
        </Link>

        <Spacer height={100} />

        <Link href="/" style={styles.link}>
          <ThemedText>Home</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },

  error: {
    color: Colors.warning,
    padding: 10,
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
    backgroundColor: "#f5c1c8",
  },
});
