import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles/Form";

const AccountInformation = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.description}>Fill your personal details.</Text>
        <TextInput style={styles.input} placeholder="Enter name" />
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AccountInformation;
