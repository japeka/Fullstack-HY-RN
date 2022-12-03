import { FlatList, View, StyleSheet } from "react-native";
import React from "react";
import RepositoryItem from "./RepositoryItem";

import useRepositories from "../hooks/useRepositories";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  //API
  const repositoryNodes = repositories
    ? repositories?.repositories?.edges.map((edge) => edge.node)
    : [];
  //TEST
  // const repositoryNodes = repositories
  //   ? repositories?.edges.map((edge) => edge.node)
  //   : [];

  return (
    repositoryNodes && (
      <FlatList
        data={repositoryNodes}
        testID="repositoryItem"
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
      />
    )
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
