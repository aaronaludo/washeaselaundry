import React from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import { ScrollView } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";

const Manage = ({ navigation }) => {
  return (
    <ScrollView>
      {/* <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Inventory"
        descriptionLabel="inventory description"
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Inventory"}
        buttonNavigation={"Staff Inventory"}
      /> */}
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
          <Text style={styles.buttonText}>Staff Inventory</Text>
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
          <Text style={styles.buttonText}>Staff Transactions</Text>
        </TouchableOpacity>
      </View>
      {/* <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Dropoff and Delivery "
        descriptionLabel="inventory description"
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Dropoff and Delivery"}
        buttonNavigation={"Staff Dropoff and Delivery"}
      />
      <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Pickup and Delivery"
        descriptionLabel="inventory description"
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Pickup and Delivery"}
        buttonNavigation={"Staff Pickup and Delivery"}
      />
      <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Self Service"
        descriptionLabel="inventory description"
        navigation={navigation}
        buttonContainer={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonTextLabel={"Self Service"}
        buttonNavigation={"Staff Self Service"}
      /> */}
    </ScrollView>
  );
};

export default Manage;
