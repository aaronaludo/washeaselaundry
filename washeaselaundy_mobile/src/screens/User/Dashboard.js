// import React from "react";
// import Box from "../../components/Box";
// import { styles } from "../../styles/Box";
// import { ScrollView } from "react-native";

// const Dashboard = ({ navigation }) => {
//   return (
//     <ScrollView>
//       <Box
//         container={styles.container}
//         title={styles.title}
//         description={styles.description}
//         titleLabel="Welcome, User"
//         descriptionLabel="juanrobert@mail.com"
//       />
//     </ScrollView>
//   );
// };

// export default Dashboard;

// CardList.js
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CardItem from "../../components/CardItem";

const data = [
  {
    id: "1",
    title: "Card 1",
    description: "Description for Card 1",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    title: "Card 2",
    description: "Description for Card 2",
    imageUrl: "https://example.com/image2.jpg",
  },
  // Add more card data as needed
];

const CardList = () => {
  const renderItem = ({ item }) => (
    <CardItem
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set the number of columns to 2
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
});

export default CardList;
