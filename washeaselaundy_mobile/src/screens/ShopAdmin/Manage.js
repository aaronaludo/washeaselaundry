import React from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import { ScrollView } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";

const ManagetAccounts = ({ navigation }) => {
  return (
    <ScrollView>
      {/* <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Riders"
        descriptionLabel="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Shop Admin Riders"}
        buttonNavigation={"Shop Admin Riders"}
      /> */}
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
      {/* <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Staffs"
        descriptionLabel="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Shop Admin Staffs"}
        buttonNavigation={"Shop Admin Staffs"}
      /> */}
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
      {/* <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Machines"
        descriptionLabel="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Shop Admin Machines"}
        buttonNavigation={"Shop Admin Machines"}
      /> */}
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
      <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Laundry Services"
        descriptionLabel="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Shop Admin Laundry Services"}
        buttonNavigation={"Shop Admin Laundry Services"}
      />
    </ScrollView>
  );
};

export default ManagetAccounts;
