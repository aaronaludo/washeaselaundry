import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const TransactionItemsHistory = ({ route }) => {
  const { transaction_id } = route.params;
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("customerToken");

        const response = await axios.get(
          `http://192.168.1.2:8000/api/customers/transactions/${transaction_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTransaction(response.data.response[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  // console.log(transaction);
  return (
    <ScrollView>
      <View style={styles2.container}>
        {transaction !== null && (
          <Card style={styles2.card}>
            <Card.Content>
              <Title style={{ fontWeight: "bold" }}>{transaction.name}</Title>
              <Paragraph>
                {transaction.shop_admin.first_name +
                  " " +
                  transaction.shop_admin.last_name}
              </Paragraph>
              <Paragraph>{transaction.address}</Paragraph>
              <Paragraph>{transaction.date}</Paragraph>
              <Paragraph>{transaction.time}</Paragraph>
              <Paragraph>{transaction.status.name}</Paragraph>
              <Paragraph>{transaction.payment_method.name}</Paragraph>
              <Paragraph>{transaction.special_instruction}</Paragraph>
            </Card.Content>
          </Card>
        )}
        {transaction !== null && (
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#38383b",
              width: "100%",
              marginBottom: 30,
            }}
          >
            Items:
          </Text>
        )}
        {transaction !== null &&
          transaction.items.map((item) => (
            <Card style={styles2.card2} key={item.id}>
              <Card.Content>
                <Title style={{ fontWeight: "bold" }}>{item.name}</Title>
                <Paragraph>{item.quantity} pieces</Paragraph>
                <Paragraph>{item.weight} kilogram</Paragraph>
                <Paragraph>{item.transaction_mode.name}</Paragraph>
                <Paragraph>{item.service.name}</Paragraph>
                <Paragraph>
                  {item.additional_service === null
                    ? item.additional_service
                    : item.additional_service.name}
                </Paragraph>
                <Paragraph>
                  {item.machine === null ? item.machine : item.machine.name}
                </Paragraph>
              </Card.Content>
            </Card>
          ))}
        {transaction !== null && (
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#38383b",
              width: "100%",
              marginBottom: 30,
            }}
          >
            Feedbacks:
          </Text>
        )}
        {transaction !== null &&
          transaction.feedbackss.map((item) => (
            <Card style={styles2.card2} key={item.id}>
              <Card.Content>
                <Title style={{ fontWeight: "bold" }}>{item.message}</Title>
                <Paragraph>
                  {item.customer.first_name + " " + item.customer.last_name}
                </Paragraph>
              </Card.Content>
            </Card>
          ))}
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
  card2: {
    width: "49%",
    marginBottom: 16,
  },
  cardImage: {
    height: 150,
  },
});

export default TransactionItemsHistory;
