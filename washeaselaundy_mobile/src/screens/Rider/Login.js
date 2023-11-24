import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles/Form";

const Login = ({ navigation }) => {
  return (
    <>
      <View style={[styles.container, { flex: 1 }]}>
        <Text style={styles.title}>Welcome Rider!</Text>
        <Text style={styles.description}>Sign in to continue.</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() =>
            navigation.navigate("Rider Tab Navigator", { screen: "Dashboard" })
          }
        >
          <Text style={styles.inputButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
