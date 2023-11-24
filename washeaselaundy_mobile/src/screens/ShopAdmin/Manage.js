import React from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import { ScrollView } from "react-native";

const ManagetAccounts = ({ navigation }) => {
  return (
    <ScrollView>
      <Box
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
      />
      <Box
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
      />
      <Box
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
      />
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
