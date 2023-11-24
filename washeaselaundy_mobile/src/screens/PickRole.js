import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/Form";

const Login = ({ navigation }) => {
  return (
    <>
      <View style={[styles.container, { flex: 1 }]}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.description}>Pick Role.</Text>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => navigation.navigate("User Login")}
        >
          <Text style={styles.inputButtonText}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => navigation.navigate("Rider Login")}
        >
          <Text style={styles.inputButtonText}>Rider</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => navigation.navigate("Staff Login")}
        >
          <Text style={styles.inputButtonText}>Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => navigation.navigate("Shop Admin Login")}
        >
          <Text style={styles.inputButtonText}>Shop Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => navigation.navigate("Super Admin Login")}
        >
          <Text style={styles.inputButtonText}>Super Admin</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
