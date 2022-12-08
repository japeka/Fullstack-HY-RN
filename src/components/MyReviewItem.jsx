import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";

import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 12,
    flexDirection: "row",
    backgroundColor: theme.colors.cardBackground,
  },
  ratingContainer: {
    paddingTop: 10,
  },
  rating: {
    border: `1px solid ${theme.colors.primary}`,
    color: theme.colors.primary,
    borderRadius: "50%",
    fontWeight: 700,
    padding: 10,
  },
  infoContainer: {
    flex: 11,
    paddingLeft: 10,
  },
  user: {
    fontWeight: 600,
    fontSize: "1em",
  },
  date: {
    fontWeight: 500,
    fontSize: "1em",
    color: "grey",
  },
  review: {
    fontSize: "1em",
    marginTop: 5,
  },
});
const convertDate = (date) => format(new Date(date), "dd.MM.yyyy");

const MyReviewItem = ({ review }) => {
  const { node } = review;
  console.log("node", node);
  return (
    node && (
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text>
            <Text style={styles.rating}>{node.rating}</Text>
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.user}>{node.user.username}</Text>
          <Text style={styles.date}>{convertDate(node.createdAt)}</Text>
          <Text style={styles.review}>{node.text}</Text>
        </View>
      </View>
    )
  );
};

export default MyReviewItem;
