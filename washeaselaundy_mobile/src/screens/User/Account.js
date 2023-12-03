import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Feather } from "@expo/vector-icons";

export default function Account({ navigation }) {
  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem("customerToken");
      if (token) {
        const response = await axios.get(
          "http://192.168.1.2:8000/api/customers/logout",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.message === "Successfully logged out") {
          await AsyncStorage.removeItem("customerToken");
          await AsyncStorage.removeItem("customerData");
          navigation.navigate("User Login");
        } else {
          console.error("Logout failed:", response.data.message);
        }
      } else {
        console.error("No authentication token found");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/profile.jpg")}
          style={styles.image}
        />
        <Text style={styles.title}>User</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("User Account Information")}
        >
          <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="user"
                size={24}
                color="black"
                style={{ marginRight: 30, color: "#0d6efd" }}
              />
              <Text style={styles.buttonText}>Account Information</Text>
            </View>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("User Change Password")}
        >
          <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="unlock"
                size={24}
                color="black"
                style={{ marginRight: 30, color: "#0d6efd" }}
              />
              <Text style={styles.buttonText}>Change Password</Text>
            </View>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("User Transaction History")}
        >
          <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="layers"
                size={24}
                color="black"
                style={{ marginRight: 30, color: "#0d6efd" }}
              />
              <Text style={styles.buttonText}>Transaction History</Text>
            </View>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("User Cart History")}
        >
          <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="layers"
                size={24}
                color="black"
                style={{ marginRight: 30, color: "#0d6efd" }}
              />
              <Text style={styles.buttonText}>Cart History</Text>
            </View>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
          <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="chevrons-left"
                size={24}
                color="black"
                style={{ marginRight: 30, color: "#0d6efd" }}
              />
              <Text style={styles.buttonText}>Logout</Text>
            </View>
            <Feather name="arrow-right-circle" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#0d6efd",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    width: "100%",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
