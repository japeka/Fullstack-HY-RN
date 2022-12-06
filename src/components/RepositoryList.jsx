import { FlatList, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { RepositoryInfo } from "./RepositoryItem";
import RNPickerSelect from "react-native-picker-select";
import useRepositories from "../hooks/useRepositories";

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputWeb: {
    margin: 12,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "darkblue",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const SortOptions = ({ setSortBy }) => {
  return (
    <RNPickerSelect
      style={{ ...customPickerStyles }}
      placeholder={{
        label: "Sort by repositories",
        value: "",
      }}
      onValueChange={(value) => setSortBy(value)}
      items={[
        { label: "Latest repositories", value: "CREATED_AT" },
        { label: "Highest rated repositories", value: "DESC" },
        { label: "Lowest rated repositories", value: "ASC" },
      ]}
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setSortBy }) => {
  const listHeader = () => {
    return (
      <View>
        <SortOptions setSortBy={setSortBy} />
      </View>
    );
  };

  //API
  const repositoryNodes = repositories
    ? repositories?.edges.map((edge) => edge.node)
    : [];
  //TEST
  // const repositoryNodes = repositories
  //   ? repositories?.edges.map((edge) => edge.node)
  //   : [];
  console.log("repositoryNodes", repositoryNodes);
  return (
    repositoryNodes && (
      <FlatList
        ListHeaderComponent={listHeader(setSortBy)}
        data={repositoryNodes}
        testID="repositoryItem"
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryInfo item={item} />}
      />
    )
  );
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("");
  console.log("sortBy", sortBy);
  const { repositories } = useRepositories(sortBy);
  return (
    <RepositoryListContainer
      repositories={repositories}
      setSortBy={setSortBy}
    />
  );
};

export default RepositoryList;
