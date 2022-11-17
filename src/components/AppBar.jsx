import React from "react";

//Text,
import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-dom";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textPrimary,
  },
  menuItem: {
    paddingTop: 20,
    paddingBottom: 20,
    textDecoration: "none",
    color: theme.appbar.color,
    fontSize: theme.appbar.fontsize,
    paddingLeft: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link style={{ ...styles.menuItem, textDecoration: "none" }} to="/">
          Repositories
        </Link>
        <Link
          style={{ ...styles.menuItem, textDecoration: "none" }}
          to="/signin"
        >
          Sign in
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
