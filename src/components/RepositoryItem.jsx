import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Linking,
} from "react-native";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import theme from "./theme";
import useRepository from "../hooks/useRepository";
const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexGrow: 1,
    backgroundColor: theme.colors.cardBackground,
  },
  topText: {
    paddingTop: 4,
    paddingLeft: 15,
    width: "80%",
  },
  top: {
    flexGrow: 1,
    flexDirection: "row",
  },
  topfullname: {
    fontSize: "1.5em",
    fontWeight: 600,
  },
  topdescrition: {
    fontSize: "1.5em",
  },
  bottom: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 32,
    paddingLeft: 28,
  },
  logo: {
    width: 80,
    height: 80,
  },
  languageContainer: {
    padding: 16,
    marginLeft: 80,
    textAlign: "center",
    width: 120,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    color: theme.appbar.color,
    padding: 5,
  },
  bottomnumbers: { fontSize: 22, fontWeight: 600 },
  bottomheaders: { fontSize: 22 },
  button: {
    top: 15,
    backgroundColor: theme.colors.primary,
    padding: 20,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: "1.3em",
  },
});

const displayThousands = (num) => {
  return num > 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};

const openGithub = async (url) => {
  const supported = await Linking.canOpenURL(url);
  if (url && supported) {
    await Linking.openURL(url);
  }
};
const Item = ({ item }) => {
  const navigate = useNavigate();

  return (
    item && (
      <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
            <View style={{ ...styles.topText, flexWrap: "wrap" }}>
              <Text testID="repositoryName" style={styles.topfullname}>
                {item.fullName}
              </Text>
              <Text testID="repositoryDescription" style={styles.topdescrition}>
                {item.description}
              </Text>
            </View>
          </View>

          <View style={styles.languageContainer}>
            <Text testID="repositoryLanguage" style={styles.language}>
              {item.language}
            </Text>
          </View>

          <View style={styles.bottom}>
            <View>
              <Text
                testID="repositoryStargazersCount"
                style={styles.bottomnumbers}
              >
                {displayThousands(item.stargazersCount)}
              </Text>
              <Text style={styles.bottomheaders}>Stars</Text>
            </View>
            <View>
              <Text testID="repositoryForksCount" style={styles.bottomnumbers}>
                {displayThousands(item.forksCount)}
              </Text>
              <Text style={styles.bottomheaders}>Forks</Text>
            </View>
            <View>
              <Text testID="repositoryReviewCount" style={styles.bottomnumbers}>
                {displayThousands(item.reviewCount)}
              </Text>
              <Text style={styles.bottomheaders}>Reviews</Text>
            </View>
            <View>
              <Text
                testID="repositoryReviewRatingAverage"
                style={styles.bottomnumbers}
              >
                {displayThousands(item.ratingAverage)}
              </Text>
              <Text style={styles.bottomheaders}>Rating</Text>
            </View>
          </View>

          {item.url && (
            <View>
              <Pressable
                style={styles.button}
                testID="fgithub"
                onPress={() => openGithub(item.url)}
              >
                <Text style={styles.buttonText}>Open in GitHub</Text>
              </Pressable>
            </View>
          )}
        </View>
      </Pressable>
    )
  );
};

const RepositoryItem = ({ item }) => {
  const { id } = useParams();
  if (id) {
    const { repository, loading } = useRepository(id);
    if (repository && !loading) {
      return repository?.repository && <Item item={repository?.repository} />;
    }
  } else {
    return <Item item={item} />;
  }
};

export default RepositoryItem;
