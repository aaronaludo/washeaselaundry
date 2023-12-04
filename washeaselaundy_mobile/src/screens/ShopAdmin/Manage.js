import React from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import { ScrollView } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";

const ManagetAccounts = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Riders</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("Shop Admin Riders", {
              result: "",
            })
          }
        >
          <Text style={styles.buttonText}>Shop Admin Riders</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Staffs</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("Shop Admin Staffs", {
              result: "",
            })
          }
        >
          <Text style={styles.buttonText}>Shop Admin Staffs</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Machines</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("Shop Admin Machines", {
              result: "",
            })
          }
        >
          <Text style={styles.buttonText}>Shop Admin Machines</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Laundry Services</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("Shop Admin Laundry Services", {
              result: "",
            })
          }
        >
          <Text style={styles.buttonText}>Shop Admin Laundry Services</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Additional Laundry Services</Text>
        <Text style={styles.description}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("Shop Admin Additional Laundry Services", {
              result: "",
            })
          }
        >
          <Text style={styles.buttonText}>
            Shop Admin Additional Laundry Services
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ManagetAccounts;
