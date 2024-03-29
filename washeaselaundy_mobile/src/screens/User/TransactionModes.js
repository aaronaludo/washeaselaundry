import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Card, Title, Paragraph } from "react-native-paper";
import { styles } from "../../styles/Box";

const TransactionMode = ({ route, navigation }) => {
  const { shop_admin_id } = route.params;

  return (
    <ScrollView>
      <View style={styles2.container}>
        <Card style={styles2.card}>
          <Card.Content>
            <Title style={{ fontWeight: "bold" }}>Selling Items</Title>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Paragraph>
            <TouchableOpacity
              style={[styles.buttonContainer, { marginBottom: 10 }]}
              onPress={() => {
                navigation.navigate("User Selling Items");
              }}
            >
              <Text style={styles.buttonText}>View Items</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
        <Card style={styles2.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("User Services", {
                transaction_mode_id: 1,
                shop_admin_id: shop_admin_id,
              })
            }
          >
            <Card.Cover
              source={require("../../../assets/images/bg.png")}
              style={styles2.cardImage}
            />
            <Card.Content>
              <Title style={{ fontWeight: "bold" }}>Self Sevice</Title>
              <Paragraph>Description</Paragraph>
            </Card.Content>
          </TouchableOpacity>
        </Card>
        <Card style={styles2.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("User Services", {
                transaction_mode_id: 2,
                shop_admin_id: shop_admin_id,
              })
            }
          >
            <Card.Cover
              source={require("../../../assets/images/bg.png")}
              style={styles2.cardImage}
            />
            <Card.Content>
              <Title style={{ fontWeight: "bold" }}>Pickup and Delivery</Title>
              <Paragraph>Description</Paragraph>
            </Card.Content>
          </TouchableOpacity>
        </Card>
        <Card style={styles2.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("User Services", {
                transaction_mode_id: 3,
                shop_admin_id: shop_admin_id,
              })
            }
          >
            <Card.Cover
              source={require("../../../assets/images/bg.png")}
              style={styles2.cardImage}
            />
            <Card.Content>
              <Title style={{ fontWeight: "bold" }}>Pickup Only</Title>
              <Paragraph>Description</Paragraph>
            </Card.Content>
          </TouchableOpacity>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 18,
  },
  card: {
    width: "100%",
    marginBottom: 16,
  },
  cardImage: {
    height: 150,
  },
});

export default TransactionMode;
