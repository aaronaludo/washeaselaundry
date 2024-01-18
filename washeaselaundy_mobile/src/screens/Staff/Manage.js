import React from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import { ScrollView } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";

const Manage = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Inventory</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("Staff Inventory", {
              result: "",
            })
          }
        >
          <Text style={styles.buttonText}>View Inventory</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("Staff Transactions", {
              result: "",
            })
          }
        >
          <Text style={styles.buttonText}>View Transactions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Selling Items</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("Staff Selling Items", {
              result: "",
            })
          }
        >
          <Text style={styles.buttonText}>View Selling Items</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Manage;
