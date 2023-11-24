import React from "react";
import Box from "../../components/Box";
import { styles } from "../../styles/Box";
import { ScrollView } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <ScrollView>
      <Box
        container={styles.container}
        title={styles.title}
        description={styles.description}
        titleLabel="Welcome, Super Admin"
        descriptionLabel="juanrobert@mail.com"
      />
    </ScrollView>
  );
};

export default Dashboard;
