import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/Form";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("riderToken");
    if (token) {
      navigation.navigate("Rider Tab Navigator", { screen: "Dashboard" });
    }
  };

  // const handleLogin = async () => {
  //   setError("");
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/riders/login",
  //       {
  //         email,
  //         password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     const { token, user } = response.data.response;

  //     await AsyncStorage.setItem("riderToken", token);
  //     await AsyncStorage.setItem("riderData", JSON.stringify(user));

  //     setEmail("");
  //     setPassword("");
  //     navigation.navigate("Rider Tab Navigator", { screen: "Dashboard" });
  //   } catch (error) {
  //     setEmail("");
  //     setPassword("");
  //     console.error("Login error:", error);
  //     setError(error.response.data.message);
  //   }
  // };

  const handleLogin = () => {
    setError("");

    axios
      .post(
        "http://192.168.1.2:8000/api/riders/login",
        {
          email,
          password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { token, user } = response.data.response;

        return Promise.all([
          AsyncStorage.setItem("riderToken", token),
          AsyncStorage.setItem("riderData", JSON.stringify(user)),
        ]);
      })
      .then(() => {
        setEmail("");
        setPassword("");
        navigation.navigate("Rider Tab Navigator", { screen: "Dashboard" });
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        console.error("Login error:", error);

        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred during login");
        }
      });
  };

  return (
    <>
      <View style={[styles.container, { flex: 1 }]}>
        <Text style={styles.title}>Welcome Rider!</Text>
        <Text style={styles.description}>Login to continue.</Text>
        {error !== "" && (
          <Text style={[styles.description, { color: "red" }]}>{error}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleLogin}>
          <Text style={styles.inputButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
