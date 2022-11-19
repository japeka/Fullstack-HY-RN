import { FlatList, View, StyleSheet } from "react-native";
import React from "react";
//import RepositoryItem from "./RepositoryItem";

import useRepositories from "../hooks/useRepositories";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories?.repositories?.edges.map((edge) => edge.node)
    : [];
  console.log("repositoryNodes", repositoryNodes);
  return (
    repositoryNodes && (
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={repositoryNodes}
      />
    )
  );
};

export default RepositoryList;
