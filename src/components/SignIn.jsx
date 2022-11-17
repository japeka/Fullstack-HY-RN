import React from "react";
import FormikTextInput from "./FormikTextInput";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Formik } from "formik";
import theme from "./theme";

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
  const handleSubmit = (values) => {
    console.log("janne", values);
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
