import React from "react";
import FormikTextInput from "./FormikTextInput";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Formik } from "formik";
import theme from "./theme";
import useSignIn from "../hooks/useSignIn";

import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: "1.3em",
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log("data", data);
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            secureTextEntry
            placeholder="Password"
          />
          <Pressable style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
