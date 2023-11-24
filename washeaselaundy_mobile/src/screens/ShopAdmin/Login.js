import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles/Form";

const Login = ({ navigation }) => {
  return (
    <>
      <View style={[styles.container, { flex: 1 }]}>
        <Text style={styles.title}>Welcome Shop Admin!</Text>
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
            navigation.navigate("Shop Admin Tab Navigator", {
              screen: "Dashboard",
            })
          }
        >
          <Text style={styles.inputButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.inputText}>
          Don't have an Account?{" "}
          <Text
            style={styles.subInputText}
            onPress={() => navigation.navigate("Shop Admin Subscription")}
          >
            Subscription
          </Text>
        </Text>
      </View>
    </>
  );
};

export default Login;
