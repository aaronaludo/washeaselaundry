import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const Dashboard = ({ route, navigation }) => {
  const { transaction_mode_id, shop_admin_id } = route.params;

  return (
    <ScrollView>
      <View style={styles2.container}>
        <Card style={styles2.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("User Additional Services", {
                service_id: 1,
                transaction_mode_id: transaction_mode_id,
                shop_admin_id: shop_admin_id,
              })
            }
          >
            <Card.Cover
              source={require("../../../assets/images/bg.png")}
              style={styles2.cardImage}
            />
            <Card.Content>
              <Title style={{ fontWeight: "bold" }}>
                Basic Services (Wash, Dry, Fold)
              </Title>
              <Paragraph>Description</Paragraph>
            </Card.Content>
          </TouchableOpacity>
        </Card>
        <Card style={styles2.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("User Cart", {
                service_id: 2,
                transaction_mode_id: transaction_mode_id,
                shop_admin_id: shop_admin_id,
                additional_service_id: null,
              })
            }
          >
            <Card.Cover
              source={require("../../../assets/images/bg.png")}
              style={styles2.cardImage}
            />
            <Card.Content>
              <Title style={{ fontWeight: "bold" }}>Ironing</Title>
              <Paragraph>Description</Paragraph>
            </Card.Content>
          </TouchableOpacity>
        </Card>
        <Card style={styles2.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("User Cart", {
                service_id: 3,
                transaction_mode_id: transaction_mode_id,
                shop_admin_id: shop_admin_id,
                additional_service_id: null,
              })
            }
          >
            <Card.Cover
              source={require("../../../assets/images/bg.png")}
              style={styles2.cardImage}
            />
            <Card.Content>
              <Title style={{ fontWeight: "bold" }}>Dry Cleaning</Title>
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

export default Dashboard;
