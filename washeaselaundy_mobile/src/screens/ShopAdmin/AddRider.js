import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/Form";
import axios from "axios";

const AddRider = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleAddItem = async () => {
    try {
      const token = await AsyncStorage.getItem("shopAdminToken");

      const response = await axios.post(
        `${"http://192.168.1.8:8000"}/api/shop_admins/riders/add`,
        {
          first_name: firstName,
          last_name: lastName,
          address: address,
          phone_number: phoneNumber,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(response.data.message);

      navigation.navigate("Shop Admin Riders", {
        result: response.data.message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Add Rider</Text>
        <Text style={styles.description}></Text>
        <TextInput
          style={styles.input}
          placeholder="Enter first name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password confirmation"
          value={passwordConfirmation}
          onChangeText={(text) => setPasswordConfirmation(text)}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleAddItem}>
          <Text style={styles.inputButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddRider;
