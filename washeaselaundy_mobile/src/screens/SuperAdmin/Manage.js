import React from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import { ScrollView } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";

const Manage = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Shop Admins</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Super Admin Shop Admins", {
              result: "",
            });
          }}
        >
          <Text style={styles.buttonText}>View Shop Admins</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Manage;
