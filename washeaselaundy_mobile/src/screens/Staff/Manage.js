import React from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import { ScrollView } from "react-native";

const Manage = ({ navigation }) => {
  return (
    <ScrollView>
      <Box
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
      />
      <Box
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
      />
    </ScrollView>
  );
};

export default Manage;
