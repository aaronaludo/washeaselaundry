import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { styles } from "../../styles/Form";

const Subscription = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <View style={[styles.container, { flex: 1 }]}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.description}>Create a new account.</Text>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />

        <TouchableOpacity
          style={styles.inputButton}
          onPress={() =>
            navigation.navigate("User Tab Navigator", { screen: "Dashboard" })
          }
        >
          <Text style={styles.inputButtonText}>Register</Text>
        </TouchableOpacity>

        <CheckBox
          title="I agree to the Terms & Conditions"
          checked={isChecked}
          onPress={toggleCheckbox}
          containerStyle={{ backgroundColor: "#f2f2f2", borderWidth: 0 }}
          textStyle={{ color: "#000" }}
        />

        <Text style={styles.inputText}>
          Already have an account?{" "}
          <Text
            style={styles.subInputText}
            onPress={() => navigation.navigate("User Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </>
  );
};

export default Subscription;
